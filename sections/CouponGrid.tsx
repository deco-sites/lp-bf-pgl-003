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
  /** @description Ex: PAGALEVE500, PAGALEVE10 (deixe vazio se não tiver cupom) */
  couponCode?: string;
  
  /** @title Descrição do Cupom */
  /** @description Texto sobre onde/como usar o cupom (usado quando há código) */
  description?: string;
  
  /** @title Texto Alternativo */
  /** @description Texto exibido quando NÃO há código de cupom. Ex: Ícones da Farm com até 30%OFF para você aproveitar! */
  alternativeText?: string;
  
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
      brandLogo: "https://placehold.co/120x40/white/red?text=FARM",
      brand: "Farm",
      category: "Moda",
      discountBadge: "30%OFF",
      alternativeText: "Ícones da Farm com até 30%OFF para você aproveitar!",
      dropdownText: "Regras e Informações",
      rulesContent: "Aproveite até 30% de desconto em peças selecionadas da Farm!",
      usageLeft: "472 usados hoje",
      usageRight: "Expira Hoje!",
      buttonText: "Usar Cupom",
      buttonLink: "#"
    }
  ]
}: Props) {
  return (
    <section class="bg-black text-white py-8">
      <div class="container mx-auto max-w-7xl">
        {/* Título */}
        <h2 
          class="text-center mb-8 text-[22px]"
          style={{ 
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
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