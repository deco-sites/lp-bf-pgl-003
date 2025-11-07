import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Banner Desktop
   * @description Imagem principal do banner (desktop)
   */
  desktopBanner?: ImageWidget;

  /**
   * @title Banner Mobile
   * @description Imagem do banner para mobile
   */
  mobileBanner?: ImageWidget;

  /**
   * @title Data Final
   * @description Data e hora de término da Black Friday (formato: YYYY-MM-DDTHH:mm:ss)
   * @default "2025-11-30T23:59:59"
   */
  endDate?: string;

  /**
   * @title Título do Timer
   * @default "Faltam apenas:"
   */
  timerTitle?: string;
}

function BlackFridayHero({
  desktopBanner = "https://assets.decocache.com/lp-bf-pgl-003/b77ee4fb-0820-4f57-a1c2-a760ce4a86cc/bf-lp-final-(2).png",
  mobileBanner = "https://assets.decocache.com/lp-bf-pgl-003/32b5dcbb-8d7b-4410-85b0-db631fae846b/Frame-427322666-(1).png",
  endDate = "2025-11-30T23:59:59",
  timerTitle = "Faltam apenas:",
}: Props) {
  const days = useSignal(0);
  const hours = useSignal(0);
  const minutes = useSignal(0);
  const seconds = useSignal(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();

      if (difference > 0) {
        days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours.value = Math.floor((difference / (1000 * 60 * 60)) % 24);
        minutes.value = Math.floor((difference / 1000 / 60) % 60);
        seconds.value = Math.floor((difference / 1000) % 60);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section class="relative w-full min-h-[500px] md:min-h-[600px] bg-black overflow-hidden">
      {/* Banner de Fundo */}
      <div class="absolute inset-0 w-full h-full z-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={desktopBanner}
          />
          <img
            src={mobileBanner}
            alt="Black Friday Pagaleve"
            class="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
            width={1920}
            height={600}
          />
        </picture>

        {/* Overlay escuro para melhor legibilidade */}
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Conteúdo */}
      <div class="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px]">

        {/* Cronômetro */}
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 max-w-2xl w-full">
          <h2 
            class="text-white text-2xl md:text-3xl font-bold text-center mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {timerTitle}
          </h2>

          <div class="grid grid-cols-4 gap-3 md:gap-6">
            {/* Dias */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 md:p-6 shadow-lg w-full">
                <span class="text-3xl md:text-5xl font-bold text-black block text-center">
                  {String(days.value).padStart(2, '0')}
                </span>
              </div>
              <span 
                class="text-white text-sm md:text-base mt-2 font-semibold"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Dias
              </span>
            </div>

            {/* Horas */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 md:p-6 shadow-lg w-full">
                <span class="text-3xl md:text-5xl font-bold text-black block text-center">
                  {String(hours.value).padStart(2, '0')}
                </span>
              </div>
              <span 
                class="text-white text-sm md:text-base mt-2 font-semibold"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Horas
              </span>
            </div>

            {/* Minutos */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 md:p-6 shadow-lg w-full">
                <span class="text-3xl md:text-5xl font-bold text-black block text-center">
                  {String(minutes.value).padStart(2, '0')}
                </span>
              </div>
              <span 
                class="text-white text-sm md:text-base mt-2 font-semibold"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Minutos
              </span>
            </div>

            {/* Segundos */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 md:p-6 shadow-lg w-full">
                <span class="text-3xl md:text-5xl font-bold text-black block text-center">
                  {String(seconds.value).padStart(2, '0')}
                </span>
              </div>
              <span 
                class="text-white text-sm md:text-base mt-2 font-semibold"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Segundos
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#ofertas"
          class="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          Ver Ofertas 🔥
        </a>
      </div>
    </section>
  );
}

export default BlackFridayHero;