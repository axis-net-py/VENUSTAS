-- Frete calculado via Melhor Envio, gravado no pedido.
-- Já aplicado no projeto Neon "aline" (mute-mud-62821640).

alter table orders add column if not exists shipping_price numeric(10,2) not null default 0;
alter table orders add column if not exists shipping_service text;
alter table orders add column if not exists shipping_cep text;
