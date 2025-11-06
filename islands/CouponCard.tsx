import { useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CouponCardProps {
  brandLogo?: ImageWidget;
  brand: string;
  category?: string;
  discountBadge: string;
  couponCode: string;
  description: string;
  dropdownText?: string;
  rulesContent?: string;
  usageInfo?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CouponCard({
  brandLogo,
  brand,
  category,
  discountBadge,
  couponCode,
  description,
  dropdownText = "Regras e Informações",
  rulesContent,
  usageInfo,
  buttonText = "Usar Cupom",
  buttonLink = "#"
}: CouponCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div class="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800">
      {/* Header: Logo, Marca e Badge */}
      <div class="flex items-start justify-between mb-6">
        <div class="flex items-center gap-3">
          {brandLogo && (
            <div class="bg-white rounded-lg p-2.5 flex items-center justify-center min-w-[64px] h-[48px]">
              <img 
                src={brandLogo} 
                alt={brand}
                class="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          <div>
            <h3 class="font-bold text-white text-lg leading-tight">{brand}</h3>
            {category && (
              <p class="text-gray-400 text-sm mt-0.5">{category}</p>
            )}
          </div>
        </div>
        
        {/* Badge de Desconto */}
        <div class="bg-gradient-to-r from-pink-600 to-purple-600 rounded-full px-3 py-1.5 text-xs font-bold text-white whitespace-nowrap">
          {discountBadge}
        </div>
      </div>
      
      {/* Descrição */}
      <p class="text-gray-300 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Código do Cupom com borda tracejada rosa */}
      <div class="relative mb-4">
        <div class="border-2 border-dashed border-pink-600 rounded-lg p-4 bg-[#0a0a0a] flex items-center justify-between">
          <span class="font-bold text-white text-lg tracking-wider">
            {couponCode}
          </span>
          <button 
            onClick={handleCopy}
            class="text-pink-600 hover:text-pink-500 transition-colors p-1"
            aria-label="Copiar código"
          >
            {copied ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Dropdown Funcional */}
      <div class="mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          class="flex items-center justify-between w-full text-left text-white text-sm font-medium hover:text-pink-500 transition-colors"
        >
          <span>{dropdownText}</span>
          <svg 
            class={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {isOpen && rulesContent && (
          <div class="mt-3 text-gray-300 text-sm leading-relaxed bg-[#0a0a0a] p-4 rounded-lg border border-gray-800">
            <p>{rulesContent}</p>
          </div>
        )}
      </div>
      
      {/* Informações de Uso */}
      {usageInfo && (
        <p class="text-gray-500 text-xs mb-4">
          {usageInfo}
        </p>
      )}
      
      {/* Botão */}
      <a 
        href={buttonLink}
        class="block text-center bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-3.5 px-6 rounded-full transition-all hover:scale-105 mt-auto text-base"
      >
        {buttonText}
      </a>
    </div>
  );
}