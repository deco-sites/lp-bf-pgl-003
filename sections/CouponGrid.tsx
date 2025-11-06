import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy brand */
export interface Coupon {
  /** @title Logo da Marca */
  /** @description Logo quadrada da marca */
  brandLogo?: ImageWidget;
  
  /** @title Nome da Marca */
  brand: string;
  
  /** @title Categoria/Descrição */
  /** @description Ex: Moda, Esportes, Eletrônicos */
  category?: string;
  
  /** @title Badge de Desconto */
  /** @description Ex: 10%OFF, 30%OFF, Frete Grátis */
  discountBadge: string;
  
  /** @title Código do Cupom */
  /** @description Ex: PAGALEVE10, BRAE9 */
  couponCode: string;
  
  /** @title Texto Descritivo */
  /** @description Texto sobre o cupom */
  description: string;
  
  /** @title Texto do Dropdown */
  /** @description Ex: Regras e Informações */
  dropdownText?: string;
  
  /** @title Texto de Ajuda */
  /** @description Ex: 472 cookies help | Espera help */
  helpText?: string;
  
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
      brandLogo: "https://placehold.co/120x40/white/black?text=Hering",
      brand: "Hering",
      category: "Moda",
      discountBadge: "10%OFF",
      couponCode: "PAGALEVE10",
      description: "Cole esse código na compra de cupon até dia 26 loja",
      dropdownText: "Regras e Informações",
      helpText: "472 cookies help | Espera help",
      buttonText: "Usar Cupom",
      buttonLink: "#"
    }
  ]
}: Props) {
  return (
    <section class="bg-black text-white py-12 px-4">
      <div class="container mx-auto max-w-7xl">
        {/* Título */}
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">
          {sectionTitle}
        </h2>
        
        {/* Grid de Cupons */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <div 
              key={index}
              class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-5 flex flex-col h-full"
            >
              {/* Header: Logo, Marca e Badge */}
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                  {coupon.brandLogo && (
                    <div class="bg-white rounded-lg p-2 flex items-center justify-center w-16 h-10">
                      <img 
                        src={coupon.brandLogo} 
                        alt={coupon.brand}
                        class="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 class="font-bold text-white text-base">{coupon.brand}</h3>
                    {coupon.category && (
                      <p class="text-gray-400 text-xs">{coupon.category}</p>
                    )}
                  </div>
                </div>
                
                {/* Badge de Desconto */}
                <div class="bg-purple-900 border border-purple-600 rounded-full px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                  {coupon.discountBadge}
                </div>
              </div>
              
              {/* Descrição */}
              <p class="text-gray-300 text-sm mb-3">
                {coupon.description}
              </p>
              
              {/* Código do Cupom */}
              <div class="flex items-center justify-between bg-black border border-gray-700 rounded-lg px-4 py-3 mb-3">
                <span class="font-bold text-white text-sm tracking-wider">
                  {coupon.couponCode}
                </span>
                <button 
                  class="text-purple-500 hover:text-purple-400 transition-colors"
                  aria-label="Copiar código"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
              
              {/* Dropdown */}
              {coupon.dropdownText && (
                <details class="mb-3">
                  <summary class="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors flex items-center gap-1">
                    {coupon.dropdownText}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div class="mt-2 text-gray-400 text-xs">
                    Detalhes sobre as regras e informações do cupom.
                  </div>
                </details>
              )}
              
              {/* Help Text */}
              {coupon.helpText && (
                <p class="text-gray-500 text-xs mb-4">
                  {coupon.helpText}
                </p>
              )}
              
              {/* Botão */}
              <a 
                href={coupon.buttonLink || "#"}
                class="block text-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition-all hover:scale-105 mt-auto"
              >
                {coupon.buttonText || "Usar Cupom"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}