import { useScript } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @title Desconto */
  /** @description Ex: 50% */
  discount?: string;
  
  /** @title Título */
  /** @description Texto principal do banner */
  title?: string;
  
  /** @title Subtítulo */
  subtitle?: string;
  
  /** @title Data Final da Promoção */
  /** @description Data final no formato ISO (YYYY-MM-DDTHH:mm:ss) */
  endDate?: string;
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Cor de Destaque */
  accentColor?: string;
  
  /** @title Imagem do Produto Esquerdo */
  leftProductImage?: ImageWidget;
  
  /** @title Imagem do Produto Direito */
  rightProductImage?: ImageWidget;
}

const onLoad = (endDate: string) => {
  const countDownDate = new Date(endDate).getTime();
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    if (distance < 0) {
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const daysEl = document.getElementById("countdown-days");
    const hoursEl = document.getElementById("countdown-hours");
    const minutesEl = document.getElementById("countdown-minutes");
    const secondsEl = document.getElementById("countdown-seconds");
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  };
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
};

export default function BlackFridayHero({
  discount = "50%",
  title = "a gente leva a sua black além",
  subtitle = "",
  endDate = "2024-11-30T23:59:59",
  backgroundColor = "#000000",
  textColor = "#ffffff",
  accentColor = "#ff00ff",
  leftProductImage,
  rightProductImage
}: Props) {
  return (
    <>
      <section 
        class="relative py-12 px-4 overflow-hidden"
        style={{ backgroundColor, color: textColor }}
      >
        <div class="container mx-auto max-w-7xl">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Produto Esquerdo */}
            {leftProductImage && (
              <div class="hidden lg:flex justify-center items-center">
                <img 
                  src={leftProductImage} 
                  alt="Produto" 
                  class="w-64 h-64 object-contain"
                />
              </div>
            )}
            
            {/* Conteúdo Central */}
            <div class="text-center space-y-6">
              {/* Badge de Desconto */}
              <div class="inline-flex items-center gap-2">
                <span 
                  class="text-6xl font-bold px-6 py-2 rounded-2xl"
                  style={{ backgroundColor: accentColor, color: "#000" }}
                >
                  {discount}
                </span>
                <span class="text-2xl font-bold uppercase">OFF</span>
              </div>
              
              {/* Título */}
              <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                {title}
              </h1>
              
              {subtitle && (
                <p class="text-lg opacity-90">{subtitle}</p>
              )}
              
              {/* Countdown Timer */}
              <div class="flex justify-center gap-4 mt-8">
                <div class="text-center">
                  <div 
                    class="text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: accentColor, color: "#000" }}
                    id="countdown-days"
                  >
                    00
                  </div>
                  <div class="text-xs mt-2 opacity-75">DIAS</div>
                </div>
                <div class="text-center">
                  <div 
                    class="text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: accentColor, color: "#000" }}
                    id="countdown-hours"
                  >
                    00
                  </div>
                  <div class="text-xs mt-2 opacity-75">HORAS</div>
                </div>
                <div class="text-center">
                  <div 
                    class="text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: accentColor, color: "#000" }}
                    id="countdown-minutes"
                  >
                    00
                  </div>
                  <div class="text-xs mt-2 opacity-75">MIN</div>
                </div>
                <div class="text-center">
                  <div 
                    class="text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: accentColor, color: "#000" }}
                    id="countdown-seconds"
                  >
                    00
                  </div>
                  <div class="text-xs mt-2 opacity-75">SEG</div>
                </div>
              </div>
            </div>
            
            {/* Produto Direito */}
            {rightProductImage && (
              <div class="hidden lg:flex justify-center items-center">
                <img 
                  src={rightProductImage} 
                  alt="Produto" 
                  class="w-64 h-64 object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad, endDate) }}
      />
    </>
  );
}