import { getProducts, DEFAULT_PACKAGE } from "@/lib/products";

export type ShippingOption = {
  id: string;
  name: string;
  company: string;
  price: number;
  days: number;
};

export type ShippingResult =
  | { ok: true; options: ShippingOption[] }
  | { ok: false; reason: "not_configured" | "invalid_cep" | "api_error" };

const CEP_RE = /^\d{8}$/;

export async function calculateShipping(
  destCep: string,
  items: { id: string; qty: number }[]
): Promise<ShippingResult> {
  const token = process.env.MELHOR_ENVIO_TOKEN;
  const originCep = process.env.STORE_ORIGIN_CEP;
  if (!token || !originCep) return { ok: false, reason: "not_configured" };

  const cep = destCep.replace(/\D/g, "");
  if (!CEP_RE.test(cep)) return { ok: false, reason: "invalid_cep" };

  const catalog = await getProducts();
  const products = items
    .map(({ id, qty }) => {
      const p = catalog.find((c) => c.id === id);
      if (!p) return null;
      return {
        id: p.id,
        width: DEFAULT_PACKAGE.width_cm,
        height: DEFAULT_PACKAGE.height_cm,
        length: DEFAULT_PACKAGE.length_cm,
        weight: DEFAULT_PACKAGE.weight_kg,
        insurance_value: p.price,
        quantity: qty,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
  if (products.length === 0) return { ok: false, reason: "invalid_cep" };

  const sandbox = process.env.MELHOR_ENVIO_SANDBOX === "true";
  const base = sandbox
    ? "https://sandbox.melhorenvio.com.br"
    : "https://melhorenvio.com.br";

  try {
    const res = await fetch(`${base}/api/v2/me/shipment/calculate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        // exigido pela API do Melhor Envio
        "User-Agent": "ALINE (contato@aline.com.br)",
      },
      body: JSON.stringify({
        from: { postal_code: originCep },
        to: { postal_code: cep },
        products,
      }),
    });
    if (!res.ok) {
      console.error("[shipping] Melhor Envio HTTP", res.status, await res.text());
      return { ok: false, reason: "api_error" };
    }
    const data = await res.json();
    if (!Array.isArray(data)) return { ok: false, reason: "api_error" };

    const options: ShippingOption[] = data
      .filter((o) => !o.error && o.price)
      .map((o) => ({
        id: String(o.id),
        name: o.name,
        company: o.company?.name ?? "",
        price: Number(o.price),
        days: Number(o.delivery_time ?? o.delivery_range?.max ?? 0),
      }))
      .sort((a, b) => a.price - b.price);

    return { ok: true, options };
  } catch (e) {
    console.error("[shipping] Melhor Envio falhou:", e);
    return { ok: false, reason: "api_error" };
  }
}
