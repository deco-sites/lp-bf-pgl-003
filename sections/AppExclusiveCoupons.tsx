import type { ImageWidget } from "apps/admin/widgets.ts";
import AppExclusiveCard from "../islands/AppExclusiveCard.tsx";

/** @titleBy brand */
export interface AppExclusiveCoupon {
  /** @title Logo da Marca */
  /** @description Logo quadrada da marca (fundo branco) */
  brandLogo?: ImageWidget;
  
  /** @title Nome da Marca */
  brand: string;
  
  /** @title Categoria */
  /** @description Ex: Moda, Esportes, Eletrônicos, Variedades */
  category?: string;
  
  /** @title Badge de Desconto */
  /** @description Ex: R$ 100 OFF, 10% OFF, Frete Grátis, Cashback */
  discountBadge: string;
  
  /** @title Descrição da Oferta */
  /** @description Texto principal da oferta exclusiva do app */
  description: string;
  
  /** @title Código do Cupom */
  /** @description Código do cupom para copiar (opcional) - Ex: PAGALEVE15, APP2024 */
  couponCode?: string;
  
  /** @title Texto do Dropdown */
  /** @description Ex: Regras e Informações */
  dropdownText?: string;
  
  /** @title Conteúdo das Regras */
  /** @description Texto detalhado das regras da promoção */
  rulesContent?: string;
  
  /** @title Texto do Botão */
  buttonText?: string;
  
  /** @title Link do Botão */
  /** @description Link para download do app ou deeplink */
  buttonLink?: string;
}

export interface Props {
  /** @title Título da Seção */
  sectionTitle?: string;
  
  /** @title Subtítulo */
  /** @description Texto de apoio abaixo do título */
  subtitle?: string;
  
  /** @title Cupons Exclusivos */
  /** @description Lista de cupons/promoções exclusivas do app */
  coupons?: AppExclusiveCoupon[];
  
  /** @title Cor de Fundo */
  /** @format color */
  backgroundColor?: string;

  /** @title Cor do Badge "EXCLUSIVO APP" */
  /** @format color */
  /** @default #F77ACF */
  exclusiveBadgeColor?: string;

  /** @title Cor do Texto do Badge "EXCLUSIVO APP" */
  /** @format color */
  /** @default #000000 */
  exclusiveBadgeTextColor?: string;

  /** @title Cor de Fundo do Badge de Desconto */
  /** @format color */
  /** @default rgba(255, 0, 155, 0.1) */
  discountBadgeColor?: string;

  /** @title Cor da Borda do Badge de Desconto */
  /** @format color */
  /** @default #FF009B */
  discountBadgeBorderColor?: string;

  /** @title Cor de Fundo da Descrição (sem cupom) */
  /** @format color */
  /** @default rgba(247, 122, 207, 0.05) */
  descriptionBgColor?: string;

  /** @title Cor da Borda da Descrição (sem cupom) */
  /** @format color */
  /** @default rgba(247, 122, 207, 0.2) */
  descriptionBorderColor?: string;

  /** @title Cor de Fundo da Área do Cupom */
  /** @format color */
  /** @default #141619 */
  couponAreaBgColor?: string;

  /** @title Cor da Borda Tracejada do Cupom */
  /** @format color */
  /** @default #FF009B */
  couponBorderColor?: string;

  /** @title Cor de Fundo do Botão Copiar */
  /** @format color */
  /** @default rgba(247, 122, 207, 0.1) */
  copyButtonBgColor?: string;

  /** @title Cor do Ícone do Botão Copiar */
  /** @format color */
  /** @default #FF009B */
  copyButtonIconColor?: string;

  /** @title Cor do Botão */
  /** @format color */
  /** @default #F77ACF */
  buttonColor?: string;

  /** @title Cor do Texto do Botão */
  /** @format color */
  /** @default #000000 */
  buttonTextColor?: string;
}

export default function AppExclusiveCoupons({
  sectionTitle = "Promoções exclusivas no app",
  subtitle = "Baixe o app da Pagaleve e aproveite ofertas que só quem tem o app consegue!",
  backgroundColor = "#000000",
  exclusiveBadgeColor = "#F77ACF",
  exclusiveBadgeTextColor = "#000000",
  discountBadgeColor = "rgba(255, 0, 155, 0.1)",
  discountBadgeBorderColor = "#FF009B",
  descriptionBgColor = "rgba(247, 122, 207, 0.05)",
  descriptionBorderColor = "rgba(247, 122, 207, 0.2)",
  couponAreaBgColor = "#141619",
  couponBorderColor = "#FF009B",
  copyButtonBgColor = "rgba(247, 122, 207, 0.1)",
  copyButtonIconColor = "#FF009B",
  buttonColor = "#F77ACF",
  buttonTextColor = "#000000",
  coupons = [
    {
      brandLogo: "https://placehold.co/120x40/white/red?text=NIKE",
      brand: "Nike",
      category: "Esportes",
      discountBadge: "15% OFF",
      description: "Compre no app e ganhe 15% de desconto em toda a loja + frete grátis!",
      couponCode: "PAGALEVE15",
      dropdownText: "Regras e Informações",
      rulesContent: "Oferta válida apenas para compras realizadas através do app da Pagaleve. Desconto aplicado automaticamente no checkout.",
      buttonText: "Baixar App",
      buttonLink: "#"
    },
    {
      brandLogo: "https://placehold.co/120x40/white/black?text=ADIDAS",
      brand: "Adidas",
      category: "Esportes",
      discountBadge: "Cashback 10%",
      description: "Cashback de 10% em compras acima de R$ 200 pelo app!",
      couponCode: "APP10CASH",
      dropdownText: "Regras e Informações",
      rulesContent: "Cashback creditado em até 7 dias úteis após a confirmação da compra. Válido para primeira compra no app.",
      buttonText: "Baixar App",
      buttonLink: "#"
    },
    {
      brandLogo: "https://placehold.co/120x40/white/purple?text=MAGALU",
      brand: "Magazine Luiza",
      category: "Variedades",
      discountBadge: "R$ 50 OFF",
      description: "R$ 50 de desconto em compras acima de R$ 300 pelo app da Pagaleve!",
      couponCode: "PAGALEVE50",
      dropdownText: "Regras e Informações",
      rulesContent: "Desconto aplicado automaticamente em compras acima de R$ 300. Válido até o final do mês.",
      buttonText: "Baixar App",
      buttonLink: "#"
    }
  ]
}: Props) {
  return (
    <section 
      class="text-white py-12 px-4"
      style={{ backgroundColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {/* Header */}
        <div class="flex flex-col items-center mb-12 gap-4">
          {/* Título */}
          <h2 
            class="text-center"
            style={{ 
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "1.2"
            }}
          >
            {sectionTitle}
          </h2>
          
          {/* Subtítulo */}
          {subtitle && (
            <p 
              class="text-center max-w-3xl"
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: "1.5",
                color: "#DEDEE0"
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Grid de Cupons Exclusivos */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <AppExclusiveCard 
              key={index} 
              {...coupon}
              exclusiveBadgeColor={exclusiveBadgeColor}
              exclusiveBadgeTextColor={exclusiveBadgeTextColor}
              discountBadgeColor={discountBadgeColor}
              discountBadgeBorderColor={discountBadgeBorderColor}
              descriptionBgColor={descriptionBgColor}
              descriptionBorderColor={descriptionBorderColor}
              couponAreaBgColor={couponAreaBgColor}
              couponBorderColor={couponBorderColor}
              copyButtonBgColor={copyButtonBgColor}
              copyButtonIconColor={copyButtonIconColor}
              buttonColor={buttonColor}
              buttonTextColor={buttonTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}