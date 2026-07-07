# ALINE — Loja de Maquiagem & Cosméticos

Next.js + Sanity (catálogo) + Mercado Pago Checkout Pro.

## Rodar local

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev                   # http://localhost:3200
```

Sem env configurado o site funciona em modo demonstração: catálogo local
e checkout com fallback para WhatsApp.

## Mercado Pago (sandbox)

1. Crie uma aplicação em https://www.mercadopago.com.br/developers/panel/app
2. Copie o **Access Token de teste** (começa com `TEST-`) para
   `MERCADOPAGO_ACCESS_TOKEN` no `.env.local`
3. Token `TEST-` usa o checkout sandbox automaticamente; em produção,
   troque pelo token de produção na Vercel

Fluxo: carrinho → `POST /api/checkout` (preços validados no servidor) →
redirect Checkout Pro → retorno em `/obrigado` → webhook `POST /api/mp-webhook`.

## Sanity (inventário)

1. `npm create sanity@latest` (projeto separado, ex. pasta `studio/`)
2. Copie `sanity/schemas/product.ts` para os schemas do studio e registre
3. Preencha `SANITY_PROJECT_ID` e `SANITY_DATASET` no `.env.local`
4. Cadastre produtos no Studio — o site passa a ler do Sanity
   (produtos com `stock > 0`, revalidação a cada 60s)

## Roadmap

- [x] Fase 1 — loja + checkout Mercado Pago sandbox
- [ ] Fase 2 — pedidos no Supabase, painel admin (status + código de rastreio), página de acompanhamento do cliente via link com token
- [ ] Fase 3 — Melhor Envio (cotação de frete, etiqueta, rastreio automático)
