import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Texto do Título (opcional)
   * @description Texto que aparece acima do cronômetro
   */
  title?: string;

  /**
   * @title Data Final do Countdown
   * @format datetime
   * @description Data e hora em que o countdown deve terminar
   */
  expiresAt?: string;

  /**
   * @title Imagem de Fundo Desktop
   * @description Imagem de fundo para desktop (1440px)
   */
  backgroundImage?: ImageWidget;

  /**
   * @title Imagem de Fundo Mobile
   * @description Imagem de fundo para mobile (opcional, se não informada usa a mesma do desktop)
   */
  backgroundImageMobile?: ImageWidget;
}

export default function BlackFridayHero({
  title = "",
  expiresAt = "2024-11-29T23:59:59",
  backgroundImage = "https://assets.decocache.com/lp-bf-pgl-003/c5f3eb53-031b-498e-ab60-323858e53f53/black-friday-hero-bg.png",
  backgroundImageMobile,
}: Props) {
  const bgMobile = backgroundImageMobile || backgroundImage;

  return (
    <section
      class="relative w-full flex items-end justify-center hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Estilos base da seção - Mobile */
        .hero-section {
          min-height: 375px;
          padding: 16px 16px 24px 16px;
          max-width: 100vw;
        }
        
        /* Container do conteúdo */
        .hero-content {
          width: 100%;
          max-width: 398px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        /* Título */
        .hero-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 20px;
          line-height: 25px;
          font-weight: 600;
          color: #FFFFFF;
          text-align: center;
        }
        
        /* Container do countdown */
        .countdown-container {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
        }
        
        /* Cards do countdown - Mobile (reduzido) */
        .countdown-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 65px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(68px);
          border-radius: 8px;
          padding: 6px 8px;
          box-shadow: 
            0px 11px 31px rgba(0, 0, 0, 0.25),
            inset -33px 33px 33px rgba(255, 255, 255, 0.041),
            inset 33px -33px 33px rgba(149, 149, 149, 0.041);
          flex-shrink: 0;
        }
        
        .countdown-number {
          font-family: 'Quicksand', sans-serif;
          font-size: 32px;
          line-height: 40px;
          font-weight: 500;
          color: #FFFFFF;
          text-align: center;
        }
        
        .countdown-label {
          font-family: 'Quicksand', sans-serif;
          font-size: 9px;
          line-height: 11px;
          font-weight: 600;
          color: #FFFFFF;
          text-align: center;
          text-transform: uppercase;
        }
        
        .countdown-separator {
          font-family: 'Quicksand', sans-serif;
          font-size: 14px;
          color: #FFFFFF;
          flex-shrink: 0;
        }
        
        /* Tablet e Desktop - Acima de 740px */
        @media (min-width: 740px) {
          .hero-section {
            min-height: 698px;
            padding: 64px 16px;
          }
          
          .countdown-container {
            gap: 10px;
          }
          
          .countdown-card {
            width: 80px;
            height: 90px;
            padding: 8px 12px;
          }
          
          .countdown-number {
            font-size: 48px;
            line-height: 60px;
          }
          
          .countdown-label {
            font-size: 12px;
            line-height: 15px;
          }
          
          .countdown-separator {
            font-size: 16px;
          }
        }
        
        /* Desktop grande - Acima de 1024px */
        @media (min-width: 1024px) {
          .hero-section {
            padding-left: clamp(16px, 10vw, 520px);
            padding-right: clamp(16px, 10vw, 520px);
          }
        }
        
        /* Background mobile */
        @media (max-width: 739px) {
          .hero-section {
            background-image: url(${bgMobile}) !important;
          }
        }
      `}} />
      
      <div class="hero-content">
        {/* Título - Apenas se existir */}
        {title && (
          <h2 class="hero-title">
            {title}
          </h2>
        )}

        {/* Countdown */}
        <div class="countdown-container">
          {/* Dias */}
          <div class="countdown-card">
            <span class="countdown-number" data-countdown-days>
              00
            </span>
            <span class="countdown-label">
              Dias
            </span>
          </div>

          {/* Separador */}
          <span class="countdown-separator">:</span>

          {/* Horas */}
          <div class="countdown-card">
            <span class="countdown-number" data-countdown-hours>
              00
            </span>
            <span class="countdown-label">
              Horas
            </span>
          </div>

          {/* Separador */}
          <span class="countdown-separator">:</span>

          {/* Minutos */}
          <div class="countdown-card">
            <span class="countdown-number" data-countdown-minutes>
              00
            </span>
            <span class="countdown-label">
              Min
            </span>
          </div>

          {/* Separador */}
          <span class="countdown-separator">:</span>

          {/* Segundos */}
          <div class="countdown-card">
            <span class="countdown-number" data-countdown-seconds>
              00
            </span>
            <span class="countdown-label">
              Seg
            </span>
          </div>
        </div>
      </div>

      {/* Script do Countdown */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const expiresAt = new Date("${expiresAt}").getTime();
              
              function updateCountdown() {
                const now = new Date().getTime();
                const distance = expiresAt - now;
                
                if (distance < 0) {
                  document.querySelectorAll('[data-countdown-days]').forEach(el => el.textContent = '00');
                  document.querySelectorAll('[data-countdown-hours]').forEach(el => el.textContent = '00');
                  document.querySelectorAll('[data-countdown-minutes]').forEach(el => el.textContent = '00');
                  document.querySelectorAll('[data-countdown-seconds]').forEach(el => el.textContent = '00');
                  return;
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.querySelectorAll('[data-countdown-days]').forEach(el => {
                  el.textContent = String(days).padStart(2, '0');
                });
                document.querySelectorAll('[data-countdown-hours]').forEach(el => {
                  el.textContent = String(hours).padStart(2, '0');
                });
                document.querySelectorAll('[data-countdown-minutes]').forEach(el => {
                  el.textContent = String(minutes).padStart(2, '0');
                });
                document.querySelectorAll('[data-countdown-seconds]').forEach(el => {
                  el.textContent = String(seconds).padStart(2, '0');
                });
              }
              
              updateCountdown();
              setInterval(updateCountdown, 1000);
            })();
          `,
        }}
      />
    </section>
  );
}