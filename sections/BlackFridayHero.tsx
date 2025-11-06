import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Texto do Título
   * @default Começa em:
   */
  title?: string;

  /**
   * @title Data Final do Countdown
   * @format datetime
   * @description Data e hora em que o countdown deve terminar
   */
  expiresAt?: string;

  /**
   * @title Imagem de Fundo
   */
  backgroundImage?: ImageWidget;
}

export default function BlackFridayHero({
  title = "Começa em:",
  expiresAt = "2024-11-29T23:59:59",
  backgroundImage = "https://assets.decocache.com/lp-bf-pgl-003/c5f3eb53-031b-498e-ab60-323858e53f53/black-friday-hero-bg.png",
}: Props) {
  return (
    <div
      class="relative w-full flex items-end justify-center px-4 py-8 md:py-16 lg:px-[520px] lg:py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .hero-container {
            min-height: 698px !important;
          }
        }
      `}} />
      
      <div class="hero-container w-full flex flex-col items-center gap-3 max-w-[398px]">
        {/* Título */}
        <h2
          class="text-white text-center font-semibold text-base md:text-xl"
          style={{
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          {title}
        </h2>

        {/* Countdown */}
        <div class="flex items-center gap-2 md:gap-2.5">
          {/* Dias */}
          <div
            class="flex flex-col items-center justify-center rounded-lg"
            style={{
              width: "60px",
              height: "70px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(68px)",
              padding: "6px 8px",
              boxShadow: `
                0px 11px 31px rgba(0, 0, 0, 0.25),
                inset -33px 33px 33px rgba(255, 255, 255, 0.041),
                inset 33px -33px 33px rgba(149, 149, 149, 0.041)
              `,
            }}
          >
            <span
              class="text-white text-center"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: 500,
              }}
              data-countdown-days
            >
              00
            </span>
            <span
              class="text-white text-center uppercase"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "10px",
                lineHeight: "12px",
                fontWeight: 600,
              }}
            >
              Dias
            </span>
          </div>

          {/* Separador */}
          <span class="text-white text-sm md:text-base">:</span>

          {/* Horas */}
          <div
            class="flex flex-col items-center justify-center rounded-lg"
            style={{
              width: "60px",
              height: "70px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(68px)",
              padding: "6px 8px",
              boxShadow: `
                0px 11px 31px rgba(0, 0, 0, 0.25),
                inset -33px 33px 33px rgba(255, 255, 255, 0.041),
                inset 33px -33px 33px rgba(149, 149, 149, 0.041)
              `,
            }}
          >
            <span
              class="text-white text-center"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: 500,
              }}
              data-countdown-hours
            >
              00
            </span>
            <span
              class="text-white text-center uppercase"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "10px",
                lineHeight: "12px",
                fontWeight: 600,
              }}
            >
              Horas
            </span>
          </div>

          {/* Separador */}
          <span class="text-white text-sm md:text-base">:</span>

          {/* Minutos */}
          <div
            class="flex flex-col items-center justify-center rounded-lg"
            style={{
              width: "60px",
              height: "70px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(68px)",
              padding: "6px 8px",
              boxShadow: `
                0px 11px 31px rgba(0, 0, 0, 0.25),
                inset -33px 33px 33px rgba(255, 255, 255, 0.041),
                inset 33px -33px 33px rgba(149, 149, 149, 0.041)
              `,
            }}
          >
            <span
              class="text-white text-center"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: 500,
              }}
              data-countdown-minutes
            >
              00
            </span>
            <span
              class="text-white text-center uppercase"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "10px",
                lineHeight: "12px",
                fontWeight: 600,
              }}
            >
              Min
            </span>
          </div>

          {/* Separador */}
          <span class="text-white text-sm md:text-base">:</span>

          {/* Segundos */}
          <div
            class="flex flex-col items-center justify-center rounded-lg"
            style={{
              width: "60px",
              height: "70px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(68px)",
              padding: "6px 8px",
              boxShadow: `
                0px 11px 31px rgba(0, 0, 0, 0.25),
                inset -33px 33px 33px rgba(255, 255, 255, 0.041),
                inset 33px -33px 33px rgba(149, 149, 149, 0.041)
              `,
            }}
          >
            <span
              class="text-white text-center"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: 500,
              }}
              data-countdown-seconds
            >
              00
            </span>
            <span
              class="text-white text-center uppercase"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "10px",
                lineHeight: "12px",
                fontWeight: 600,
              }}
            >
              Seg
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .flex.items-center.gap-2 > div {
            width: 80px !important;
            height: 90px !important;
            padding: 8px 12px !important;
          }
          .flex.items-center.gap-2 > div span:first-child {
            font-size: 48px !important;
            line-height: 60px !important;
          }
          .flex.items-center.gap-2 > div span:last-child {
            font-size: 12px !important;
            line-height: 15px !important;
          }
        }
      `}} />

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
    </div>
  );
}