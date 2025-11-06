import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy brand */
export interface Coupon {
  /** @title Logo da Marca */
  brandLogo?: ImageWidget;
  
  /** @title Nome da Marca */
  brand: string;
  
  /** @title Desconto */
  discount: string;
  
  /** @title Descrição */
  description: string;
  
  /** @title Código do Cupom */
  couponCode?: string;
  
  /** @title Texto do Botão */
  buttonText?: string;
  
  /** @title Link do Botão */
  buttonLink?: string;
}

export interface Props {
  /** @title Título da Seção */
  sectionTitle?: string;
  
  /** @title Subtítulo da Seção */
  sectionSubtitle?: string;
  
  /** @title Cupons */
  /** @description Lista de cupons para exibir */
  coupons?: Coupon[];
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Cor do Card */
  cardBackgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Cor do Botão */
  buttonColor?: string;
  
  /** @title Cor do Texto do Botão */
  buttonTextColor?: string;
}

export default function CouponGrid({
  sectionTitle = "Cupom com nossas marcas parceiras é hora de esnobar no Pix",
  sectionSubtitle = "",
  coupons = [],
  backgroundColor = "#000000",
  cardBackgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  buttonColor = "#ff00ff",
  buttonTextColor = "#000000"
}: Props) {
  return (
    <section 
      class="py-16 px-4"
      style={{ backgroundColor, color: textColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p class="text-lg opacity-80">{sectionSubtitle}</p>
          )}
        </div>
        
        {/* Grid de Cupons */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <div 
              key={index}
              class="rounded-2xl p-6 flex flex-col justify-between"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              {/* Logo da Marca */}
              {coupon.brandLogo && (
                <div class="mb-4">
                  <img 
                    src={coupon.brandLogo} 
                    alt={coupon.brand}
                    class="h-8 object-contain"
                  />
                </div>
              )}
              
              {/* Conteúdo */}
              <div class="flex-1 mb-6">
                <h3 class="text-2xl font-bold mb-2">{coupon.discount}</h3>
                <p class="text-sm opacity-80 mb-4">{coupon.description}</p>
                
                {coupon.couponCode && (
                  <div class="inline-block px-4 py-2 rounded-lg border border-dashed border-white/30 mb-4">
                    <span class="font-mono text-sm">{coupon.couponCode}</span>
                  </div>
                )}
              </div>
              
              {/* Botão */}
              {coupon.buttonLink && (
                <a 
                  href={coupon.buttonLink}
                  class="block text-center py-3 px-6 rounded-full font-bold transition-transform hover:scale-105"
                  style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                >
                  {coupon.buttonText || "Resgatar"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}