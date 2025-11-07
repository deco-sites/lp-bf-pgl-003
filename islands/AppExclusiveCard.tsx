import { useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface AppExclusiveCardProps {
  brandLogo?: ImageWidget;
  brand: string;
  category?: string;
  discountBadge: string;
  description: string;
  couponCode?: string;
  dropdownText?: string;
  rulesContent?: string;
  usageLeft?: string;
  usageRight?: string;
  buttonText?: string;
  buttonLink?: string;
  exclusiveBadgeText?: string;
  exclusiveBadgeBold?: boolean;
  exclusiveBadgeColor?: string;
  exclusiveBadgeTextColor?: string;
  discountBadgeColor?: string;
  discountBadgeBorderColor?: string;
  descriptionBgColor?: string;
  descriptionBorderColor?: string;
  couponAreaBgColor?: string;
  couponBorderColor?: string;
  copyButtonBgColor?: string;
  copyButtonIconColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

export default function AppExclusiveCard({
  brandLogo,
  brand,
  category,
  discountBadge,
  description,
  couponCode,
  dropdownText = "Regras e Informações",
  rulesContent,
  usageLeft,
  usageRight,
  buttonText = "Baixar App",
  buttonLink = "#",
  exclusiveBadgeText = "EXCLUSIVO APP",
  exclusiveBadgeBold = false,
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
  buttonTextColor = "#000000"
}: AppExclusiveCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (couponCode) {
      navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      class="rounded-2xl p-[22px] flex flex-col gap-5 relative overflow-hidden"
      style={{ 
        backgroundColor: "#0D0F11",
        boxShadow: "0px 4px 4px rgba(222, 222, 224, 0.15)"
      }}
    >
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
        
        <div class="flex flex-col gap-2 items-end shrink-0">
          {exclusiveBadgeText && (
            <div 
              class="rounded-lg px-2 py-1 whitespace-nowrap flex items-center justify-center"
              style={{ 
                backgroundColor: exclusiveBadgeColor,
                fontFamily: "Quicksand, sans-serif",
                fontWeight: exclusiveBadgeBold ? 600 : 400,
                fontSize: "12px",
                lineHeight: "15px",
                color: exclusiveBadgeTextColor
              }}
            >
              {exclusiveBadgeText}
            </div>
          )}
          
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
      
      {couponCode ? (
        <div 
          class="rounded-2xl flex flex-col gap-[26px] p-8"
          style={{ 
            backgroundColor: couponAreaBgColor,
            border: `0.5px dashed ${couponBorderColor}`
          }}
        >
          <div class="flex items-center justify-between gap-2">
            <div class="flex flex-col gap-4">
              {description && (
                <p 
                  class="text-[#DEDEE0]"
                  style={{ 
                    fontFamily: "Quicksand, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px"
                  }}
                >
                  {description}
                </p>
              )}
              <span 
                class="text-white"
                style={{ 
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "25px",
                  textTransform: "uppercase"
                }}
              >
                {couponCode}
              </span>
            </div>
            
            <button 
              onClick={handleCopy}
              class="rounded-lg p-2.5 transition-all hover:opacity-80 flex items-center justify-center"
              style={{ 
                backgroundColor: copyButtonBgColor,
                width: "34px",
                height: "36px"
              }}
              aria-label="Copiar código"
            >
              {copied ? (
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8L7 10L13 4" stroke={copyButtonIconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              ) : (
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66667 4.66667V2.66667C4.66667 1.93029 5.26362 1.33333 6 1.33333H11.3333C12.0697 1.33333 12.6667 1.93029 12.6667 2.66667V10.6667C12.6667 11.403 12.0697 12 11.3333 12H9.33333M2.66667 14.6667H8C8.73638 14.6667 9.33333 14.0697 9.33333 13.3333V6.66667C9.33333 5.93029 8.73638 5.33333 8 5.33333H2.66667C1.93029 5.33333 1.33333 5.93029 1.33333 6.66667V13.3333C1.33333 14.0697 1.93029 14.6667 2.66667 14.6667Z" stroke={copyButtonIconColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p 
            class="text-white"
            style={{ 
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17.5px"
            }}
          >
            {description}
          </p>
        </div>
      )}
      
      <div class="flex flex-col gap-[18px]">
        {rulesContent && (
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              class="flex items-center justify-start gap-2 text-white transition-all hover:opacity-80 w-full"
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
                class="mt-3 text-[#DEDEE0] leading-relaxed text-left"
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
        
        {(usageLeft || usageRight) && (
          <div class="flex items-center gap-3">
            {usageLeft && (
              <span 
                class="text-[#999999]"
                style={{ 
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "15px"
                }}
              >
                {usageLeft}
              </span>
            )}
            {usageLeft && usageRight && (
              <div class="w-px h-4 bg-[#DEDEE0]"></div>
            )}
            {usageRight && (
              <span 
                class="text-white"
                style={{ 
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "15px"
                }}
              >
                {usageRight}
              </span>
            )}
          </div>
        )}
        
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
