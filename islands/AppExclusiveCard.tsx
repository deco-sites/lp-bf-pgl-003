import { useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface AppExclusiveCardProps {
  brandLogo?: ImageWidget;
  brand: string;
  category?: string;
  discountBadge: string;
  description: string;
  dropdownText?: string;
  rulesContent?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function AppExclusiveCard({
  brandLogo,
  brand,
  category,
  discountBadge,
  description,
  dropdownText = "Regras e Informações",
  rulesContent,
  buttonText = "Baixar App",
  buttonLink = "#"
}: AppExclusiveCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      class="rounded-2xl p-[22px] flex flex-col gap-5 relative overflow-hidden"
      style={{ 
        backgroundColor: "#171A1E",
        boxShadow: "0px 4px 4px rgba(222, 222, 224, 0.15)"
      }}
    >
      {/* Badge "Exclusivo App" - Canto superior direito */}
      <div 
        class="absolute top-0 right-0 px-4 py-2 rounded-bl-xl"
        style={{ 
          backgroundColor: "#FF009B",
          fontFamily: "Quicksand, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "15px",
          color: "#FFFFFF"
        }}
      >
        EXCLUSIVO APP
      </div>

      {/* Header: Logo, Marca e Badge de Desconto */}
      <div class="flex items-start justify-between gap-5 mt-2">
        <div class="flex items-center gap-3">
          {brandLogo && (
            <div class="bg-white rounded-lg p-2.5 flex items-center justify-center w-[92px] h-[60px]">
              <img 
                src={brandLogo} 
                alt={brand}
                class="max-w-full max-h-full object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <div class="flex flex-col gap-1">
            <h3 
              class="text-white leading-tight"
              style={{ 
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "25.2px"
              }}
            >
              {brand}
            </h3>
            {category && (
              <p 
                class="text-[#999999] leading-tight"
                style={{ 
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px"
                }}
              >
                {category}
              </p>
            )}
          </div>
        </div>
        
        {/* Badge de Desconto */}
        <div 
          class="rounded-lg px-2 py-2 whitespace-nowrap flex items-center justify-center shrink-0"
          style={{ 
            backgroundColor: "rgba(255, 0, 155, 0.1)",
            border: "1px solid #FF009B"
          }}
        >
          <span 
            class="text-white"
            style={{ 
              fontFamily: "Sora, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20.16px"
            }}
          >
            {discountBadge}
          </span>
        </div>
      </div>
      
      {/* Descrição - Com destaque maior */}
      <div 
        class="rounded-xl p-4"
        style={{ 
          backgroundColor: "rgba(255, 0, 155, 0.05)",
          border: "1px solid rgba(255, 0, 155, 0.2)"
        }}
      >
        <p 
          class="text-white text-center"
          style={{ 
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px"
          }}
        >
          {description}
        </p>
      </div>
      
      {/* Dropdown e Botão */}
      <div class="flex flex-col gap-[18px]">
        {/* Dropdown Funcional */}
        {rulesContent && (
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              class="flex items-center justify-center gap-2 text-white transition-all hover:opacity-80 w-full"
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "17.5px"
              }}
            >
              <span>{dropdownText}</span>
              <svg 
                class={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                width="13" 
                height="14" 
                viewBox="0 0 13 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.25 5.75L6.5 9L9.75 5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            
            {isOpen && (
              <div 
                class="mt-3 text-[#DEDEE0] leading-relaxed"
                style={{ 
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "15px"
                }}
              >
                {rulesContent}
              </div>
            )}
          </div>
        )}
        
        {/* Botão com ícone de download */}
        <a 
          href={buttonLink}
          class="block text-center rounded-2xl transition-all hover:opacity-90 px-3 py-3 flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: "#FF009B",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "22.5px",
            color: "#FCFCFC"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.75L6.25 10M10 13.75L13.75 10M10 13.75V3.75M3.75 13.75V15.625C3.75 16.6605 4.58947 17.5 5.625 17.5H14.375C15.4105 17.5 16.25 16.6605 16.25 15.625V13.75" 
              stroke="currentColor" 
              stroke-width="1.5" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
          <span>{buttonText}</span>
        </a>
      </div>
    </div>
  );
}