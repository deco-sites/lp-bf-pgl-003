import type { ImageWidget } from "apps/admin/widgets.ts";
import CouponCard from "../islands/CouponCard.tsx";

/** @titleBy brand */
export interface Coupon {
  /** @title Logo da Marca */
  /** @description Logo quadrada da marca (fundo branco) */
  brandLogo?: ImageWidget;
  
  /** @title Nome da Marca */
  brand: string;
  
  /** @title Categoria */
  /** @description Ex: Moda, Esportes, Eletrônicos, Variedades */
  category?: string;
  
  /** @title Badge de Desconto */
  /** @description Ex: R$ 100 OFF, 10% OFF, Frete Grátis */
  discountBadge: string;
  
  /** @title Código do Cupom */
  /** @description Ex: PAGALEVE500, PAGALEVE10 */
  couponCode: string;
  
  /** @title Descrição */
  /** @description Texto sobre onde/como usar o cupom */
  description: string;
  
  /** @title Texto do Dropdown */
  /** @description Ex: Regras e Informações */
  dropdownText?: string;
  
  /** @title Conteúdo das Regras */
  /** @description Texto detalhado das regras do cupom */
  rulesContent?: string;
  
  /** @title Info de Uso (Esquerda) */
  /** @description Ex: 472 usados hoje */
  usageLeft?: string;
  
  /** @title Info de Uso (Direita) */
  /** @description Ex: Expira Hoje! */
  usageRight?: string;
  
  /** @title Texto do Botão */
  buttonText?: string;
  
  /** @title Link do Botão */
  buttonLink?: string;
}

export interface Props {
  /** @title Título da Seção */
  sectionTitle?: string;
  
  /** @title Cupons */
  /** @description Lista de cupons para exibir */
  coupons?: Coupon[];
}

export default function CouponGrid({
  sectionTitle = "Confira os cupons das marcas parceiras e aproveite!",
  coupons = [
    {
      brandLogo: "https://placehold.co/120x40/white/red?text=ARNO",
      brand: "Arno",
      category: "Eletrodoméstico",
      discountBadge: "R$ 100 OFF",
      couponCode: "PAGALEVE500",
      description: "Cole este código no campo de cupom do site da loja",
      dropdownText: "Regras e Informações",
      rulesContent: "Use o cupom da Pagaleve e ganhe R$100 de desconto em compras acima de R$500 no site da Arno! Regras do cupom: desconto de R$100 válido para pedidos acima de R$500.",
      usageLeft: "52 usados hoje",
      usageRight: "Vencimento: 30/11/2025",
      buttonText: "Usar Cupom",
      buttonLink: "#"
    },
    {
      brandLogo: "https://placehold.co/120x40/white/black?text=HERING",
      brand: "Hering",
      category: "Moda",
      discountBadge: "10%OFF",
      couponCode: "PAGALEVE10",
      description: "Cole este código no campo de cupom do site da loja",
      dropdownText: "Regras e Informações",
      rulesContent: "Aproveite 10% de desconto em peças da Hering e facilite seu pagamento com o Pix Parcelado!",
      usageLeft: "472 usados hoje",
      usageRight: "Expira Hoje!",
      buttonText: "Usar Cupom",
      buttonLink: "#"
    },
    {
      brandLogo: "https://placehold.co/120x40/white/red?text=AliExpress",
      brand: "AliExpress",
      category: "Variedades",
      discountBadge: "R$ 12 OFF",
      couponCode: "PAGALEVEA",
      description: "Cole este código no campo de cupom do site da loja",
      dropdownText: "Regras e Informações",
      rulesContent: "R$12,00 de desconto em compras a partir de R$85,00",
      usageLeft: "72 usados hoje",
      usageRight: "Vencimento: 07/11/2025",
      buttonText: "Usar Cupom",
      buttonLink: "#"
    }
  ]
}: Props) {
  return (
    <section class="bg-black text-white py-12 px-4">
      <div class="container mx-auto max-w-7xl">
        {/* Título */}
        <h2 
          class="text-center mb-12"
          style={{ 
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px, 4vw, 36px)",
            lineHeight: "1.2"
          }}
        >
          {sectionTitle}
        </h2>
        
        {/* Grid de Cupons */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <CouponCard key={index} {...coupon} />
          ))}
        </div>
      </div>
    </section>
  );
}