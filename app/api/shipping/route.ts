import { NextResponse } from "next/server";
import { calculateShipping } from "@/lib/shipping";

export async function POST(req: Request) {
  let body: { cep?: string; items?: { id: string; qty: number }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  const cep = String(body.cep ?? "");
  const items = Array.isArray(body.items) ? body.items : [];
  if (items.length === 0) {
    return NextResponse.json({ error: "invalid_items" }, { status: 400 });
  }

  const result = await calculateShipping(cep, items);
  if (!result.ok) {
    const status = result.reason === "invalid_cep" ? 400 : 503;
    return NextResponse.json({ error: result.reason }, { status });
  }
  return NextResponse.json({ options: result.options });
}
