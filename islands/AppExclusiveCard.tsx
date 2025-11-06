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
  // Cores editáveis
  exclusiveBadgeColor?: string;
  exclusiveBadgeTextColor?: string;
  discountBadgeColor?: string;
  discountBadgeBorderColor?: string;
  descriptionBgColor?: string;
  descriptionBorderColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
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
  buttonLink = "#",
  exclusiveBadgeColor = "#F77ACF",
  exclusiveBadgeTextColor = "#000000",
  discountBadgeColor = "rgba(255, 0, 155, 0.1)",
  discountBadgeBorderColor = "#FF009B",
  descriptionBgColor = "rgba(247, 122, 207, 0.05)",
  descriptionBorderColor = "rgba(247, 122, 207, 0.2)",
  buttonColor = "#F77ACF",
  buttonTextColor = "#000000"
}: AppExclusiveCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      class="rounded-2xl p-[22px] flex flex-col gap-5 relative overflow-hidden"
      style={{ 
        backgroundColor: "#0D0F11",
        boxShadow: "0px 4px 4px rgba(222, 222, 224, 0.15)"
      }}
    >
      {/* Header: Logo, Marca e Badges */}
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          {brandLogo && (
            <div class="bg-white rounded-lg p-2.5 flex items-center justify-center w-[92px] h-[60px] shrink-0">
              <img 
                src={brandLogo} 
                alt={brand}
                class="max-w-full max-h-full object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <div class="flex flex-col gap-1 min-w-0">
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
        
        {/* Badges no canto direito */}
        <div class="flex flex-col gap-2 items-end shrink-0">
          {/* Badge "Exclusivo App" */}
          <div 
            class="rounded-lg px-2 py-1 whitespace-nowrap flex items-center justify-center"
            style={{ 
              backgroundColor: exclusiveBadgeColor,
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "15px",
              color: exclusiveBadgeTextColor
            }}
          >
            EXCLUSIVO APP
          </div>
          
          {/* Badge de Desconto */}
          <div 
            class="rounded-lg px-2 py-2 whitespace-nowrap flex items-center justify-center"
            style={{ 
              backgroundColor: discountBadgeColor,
              border: `1px solid ${discountBadgeBorderColor}`
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
      </div>
      
      {/* Descrição - Com destaque maior */}
      <div 
        class="rounded-xl p-4"
        style={{ 
          backgroundColor: descriptionBgColor,
          border: `1px solid ${descriptionBorderColor}`
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
        
        {/* Botão sem ícone */}
        <a 
          href={buttonLink}
          class="block text-center rounded-2xl transition-all hover:opacity-90 px-3 py-3"
          style={{ 
            backgroundColor: buttonColor,
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "22.5px",
            color: buttonTextColor
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}