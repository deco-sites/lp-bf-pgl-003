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
}

export default function AppExclusiveCoupons({
  sectionTitle = "Promoções exclusivas no app",
  subtitle = "Baixe o app da Pagaleve e aproveite ofertas que só quem tem o app consegue!",
  backgroundColor = "#000000",
  coupons = [
    {
      brandLogo: "https://placehold.co/120x40/white/red?text=NIKE",
      brand: "Nike",
      category: "Esportes",
      discountBadge: "15% OFF",
      description: "Compre no app e ganhe 15% de desconto em toda a loja + frete grátis!",
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
        {/* Header com Badge */}
        <div class="flex flex-col items-center mb-12 gap-4">
          {/* Badge "Exclusivo App" */}
          <div 
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ 
              backgroundColor: "rgba(255, 0, 155, 0.15)",
              border: "1px solid #FF009B"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.5L2.5 6.25V10C2.5 14.1421 5.35786 17 10 17.5C14.6421 17 17.5 14.1421 17.5 10V6.25L10 2.5Z" 
                stroke="#FF009B" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
              <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" 
                stroke="#FF009B" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
            <span 
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FF009B"
              }}
            >
              OFERTAS EXCLUSIVAS
            </span>
          </div>
          
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
            <AppExclusiveCard key={index} {...coupon} />
          ))}
        </div>

        {/* CTA Footer */}
        <div class="mt-12 text-center">
          <p 
            class="text-[#DEDEE0] mb-4"
            style={{ 
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 400,
              fontSize: "16px"
            }}
          >
            Ainda não tem o app?
          </p>
          <div class="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="#"
              class="inline-block transition-all hover:opacity-80"
              aria-label="Baixar na App Store"
            >
              <img 
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/pt-br?size=250x83&amp;releaseDate=1376438400" 
                alt="Baixar na App Store"
                class="h-12"
              />
            </a>
            <a 
              href="#"
              class="inline-block transition-all hover:opacity-80"
              aria-label="Disponível no Google Play"
            >
              <img 
                src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" 
                alt="Disponível no Google Play"
                class="h-[72px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}