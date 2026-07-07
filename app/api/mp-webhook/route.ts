import { NextResponse } from "next/server";

// Webhook do Mercado Pago: notificação de pagamento.
// Fase 1: consulta o pagamento e loga. Fase 2: gravar pedido no
// Supabase (orders/order_items) e baixar estoque no Sanity.
export async function POST(req: Request) {
  const token = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!token) return NextResponse.json({ ok: true }); // nada a fazer

  let body: { type?: string; data?: { id?: string } };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: true });
  }

  if (body.type === "payment" && body.data?.id) {
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${body.data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const payment = await res.json();
      // ponytail: log estruturado por enquanto; persistência em Supabase na Fase 2
      console.log("[mp-webhook] pagamento", {
        id: payment.id,
        status: payment.status,
        amount: payment.transaction_amount,
        email: payment.payer?.email,
        items: payment.additional_info?.items?.map((i: { id: string; quantity: number }) => ({ id: i.id, qty: i.quantity })),
      });
    }
  }
  // 200 sempre: MP reenvia em caso de erro, e não queremos loop de retry
  return NextResponse.json({ ok: true });
}
