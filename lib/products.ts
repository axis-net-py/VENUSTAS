export type Product = {
  id: string;
  name: string;
  cat: string;
  price: number;
  old: number | null;
  emoji: string;
  art: string;
  badge: string | null;
  desc: string;
};

// Catálogo local — vira fallback quando o Sanity estiver configurado.
export const FALLBACK_PRODUCTS: Product[] = [
  { id: "1", name: "Batom Matte Rouge Intense", cat: "Batom", price: 39.9, old: 59.9, emoji: "💄", art: "linear-gradient(135deg,#F6D9E2,#F783AC)", badge: "-33%", desc: "Cor intensa em uma passada, acabamento matte aveludado que não resseca. Dura até 8 horas sem retoque — sobrevive ao café, ao beijo e à reunião." },
  { id: "2", name: "Batom Líquido Velvet Nude", cat: "Batom", price: 34.9, old: null, emoji: "👄", art: "linear-gradient(135deg,#FFE8D9,#EFA98C)", badge: null, desc: "O nude perfeito existe: quente, confortável e com efeito 'minha boca, só que melhor'. Textura líquida que seca em segundos." },
  { id: "3", name: "Base Fluida HD 24h", cat: "Base", price: 79.9, old: 99.9, emoji: "🧴", art: "linear-gradient(135deg,#FDF0E0,#E6C39A)", badge: "-20%", desc: "Cobertura média construível com acabamento natural de pele real. Fórmula oil-free com ácido hialurônico, em 20 tons." },
  { id: "4", name: "Corretivo Alta Cobertura", cat: "Base", price: 45.9, old: null, emoji: "🖌️", art: "linear-gradient(135deg,#FFF3E2,#F1D3AE)", badge: null, desc: "Apaga olheira, cobre marquinha e não craquela. Aplicador em esponja de precisão para chegar onde precisa." },
  { id: "5", name: "Paleta de Sombras Sunset", cat: "Sombra", price: 89.9, old: 129.9, emoji: "🎨", art: "linear-gradient(135deg,#FFD8A8,#E8590C)", badge: "Best-seller", desc: "12 tons quentes entre o dourado e o terracota — matte, shimmer e metálico. Pigmentação de estúdio, esfumado sem esforço." },
  { id: "6", name: "Sombra Glitter Champagne", cat: "Sombra", price: 29.9, old: null, emoji: "✨", art: "linear-gradient(135deg,#FFF6DC,#C79A4B)", badge: null, desc: "Glitter cremoso que não migra e não precisa de cola. Um toque no centro da pálpebra e o look muda de nível." },
  { id: "7", name: "Máscara de Cílios Volume Max", cat: "Olhos", price: 49.9, old: 69.9, emoji: "👁️", art: "linear-gradient(135deg,#E5DBFF,#7048E8)", badge: "-28%", desc: "Escova cônica que pega até os cílios do cantinho. Volume dramático sem grumos, resistente à água e à lágrima de filme triste." },
  { id: "8", name: "Delineador Carimbo Gatinho", cat: "Olhos", price: 32.9, old: null, emoji: "🐈‍⬛", art: "linear-gradient(135deg,#DEE2E6,#495057)", badge: null, desc: "De um lado, caneta de ponta fina; do outro, carimbo do gatinho perfeito. Simetria em 10 segundos, até para quem treme." },
  { id: "9", name: "Sérum Vitamina C 30ml", cat: "Skincare", price: 69.9, old: 89.9, emoji: "🍊", art: "linear-gradient(135deg,#FFE8CC,#FD7E14)", badge: "-22%", desc: "Vitamina C estabilizada a 10% com ácido ferúlico. Uniformiza o tom, dá aquele glow de pele descansada em 4 semanas." },
  { id: "10", name: "Hidratante Facial Hialurônico", cat: "Skincare", price: 54.9, old: null, emoji: "💧", art: "linear-gradient(135deg,#D0EBFF,#339AF0)", badge: null, desc: "Gel-creme leve que hidrata 72h sem pesar. Base perfeita para maquiagem — a make desliza e dura mais." },
  { id: "11", name: "Kit 12 Pincéis Profissionais", cat: "Pincéis", price: 99.9, old: 149.9, emoji: "🖌️", art: "linear-gradient(135deg,#F3E8FF,#B197FC)", badge: "-33%", desc: "Do pincel de base ao de esfumar, cerdas sintéticas macias que não soltam fio. Cabo ergonômico e estojo de viagem incluso." },
  { id: "12", name: "Esponja de Maquiagem Blend", cat: "Pincéis", price: 19.9, old: null, emoji: "🫧", art: "linear-gradient(135deg,#FCE4EC,#F06595)", badge: null, desc: "Dobra de tamanho na água e aplica base sem desperdiçar produto. Ponta de precisão para corretivo e cantinho do olho." },
  { id: "13", name: "Perfume Fleur de Rose 50ml", cat: "Perfume", price: 129.9, old: 169.9, emoji: "🌹", art: "linear-gradient(135deg,#F6D9E2,#9E1C46)", badge: "-24%", desc: "Rosa búlgara, peônia e um fundo de âmbar. Elegante sem ser antigo, marcante sem gritar. Fixação de 8+ horas." },
  { id: "14", name: "Body Splash Baunilha", cat: "Perfume", price: 44.9, old: null, emoji: "🌸", art: "linear-gradient(135deg,#FFF0F3,#E64980)", badge: null, desc: "Baunilha cremosa com toque de flor de cerejeira. Aquele cheiro de 'acabou de sair do banho' que rende elogio." },
  { id: "15", name: "Blush Compacto Pêssego", cat: "Rosto", price: 36.9, old: 49.9, emoji: "🍑", art: "linear-gradient(135deg,#FFE3D5,#FF922B)", badge: "-26%", desc: "O tom exato de bochecha corada de frio. Textura sedosa que esfuma com o dedo e dura o dia todo." },
  { id: "16", name: "Iluminador Glow Dourado", cat: "Rosto", price: 42.9, old: null, emoji: "🌟", art: "linear-gradient(135deg,#FFF9DB,#FAB005)", badge: null, desc: "Glow molhado sem parecer suor. Partículas finas que refletem luz na medida — de dia sutil, à noite estratégico." },
];

// Sanity quando configurado (SANITY_PROJECT_ID no env), senão catálogo local.
export async function getProducts(): Promise<Product[]> {
  const projectId = process.env.SANITY_PROJECT_ID;
  if (!projectId) return FALLBACK_PRODUCTS;
  const { createClient } = await import("@sanity/client");
  const client = createClient({
    projectId,
    dataset: process.env.SANITY_DATASET || "production",
    apiVersion: "2025-01-01",
    useCdn: true,
  });
  const query = `*[_type == "product" && stock > 0] | order(name asc) {
    "id": _id, name, "cat": category, price, "old": oldPrice,
    emoji, art, badge, "desc": description
  }`;
  return client.fetch<Product[]>(query);
}
