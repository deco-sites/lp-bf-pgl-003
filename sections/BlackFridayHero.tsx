import { useEffect, useState } from "preact/hooks";
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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section class="relative w-full min-h-[500px] lg:min-h-[600px] bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Banner de Fundo */}
      <div class="absolute inset-0 w-full h-full">
        {/* Desktop Banner */}
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
        <div class="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo */}
      <div class="relative z-10 container mx-auto px-4 py-12 lg:py-20 flex flex-col items-center justify-center min-h-[500px] lg:min-h-[600px]">

        {/* Cronômetro */}
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 max-w-2xl w-full">
          <h2 class="text-white text-2xl lg:text-3xl font-bold text-center mb-6">
            {timerTitle}
          </h2>

          <div class="grid grid-cols-4 gap-3 lg:gap-6">
            {/* Dias */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 lg:p-6 shadow-lg w-full">
                <span class="text-3xl lg:text-5xl font-bold text-black block text-center">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
              </div>
              <span class="text-white text-sm lg:text-base mt-2 font-semibold">Dias</span>
            </div>

            {/* Horas */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 lg:p-6 shadow-lg w-full">
                <span class="text-3xl lg:text-5xl font-bold text-black block text-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
              </div>
              <span class="text-white text-sm lg:text-base mt-2 font-semibold">Horas</span>
            </div>

            {/* Minutos */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 lg:p-6 shadow-lg w-full">
                <span class="text-3xl lg:text-5xl font-bold text-black block text-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
              </div>
              <span class="text-white text-sm lg:text-base mt-2 font-semibold">Minutos</span>
            </div>

            {/* Segundos */}
            <div class="flex flex-col items-center">
              <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 lg:p-6 shadow-lg w-full">
                <span class="text-3xl lg:text-5xl font-bold text-black block text-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
              <span class="text-white text-sm lg:text-base mt-2 font-semibold">Segundos</span>
            </div>
          </div>
        </div>

        {/* CTA Button (opcional) */}
        <a
          href="#ofertas"
          class="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg lg:text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Ver Ofertas 🔥
        </a>
      </div>
    </section>
  );
}

export default BlackFridayHero;