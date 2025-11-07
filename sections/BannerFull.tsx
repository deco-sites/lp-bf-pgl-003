import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Título Principal
   * @default "BLACK FRIDAY"
   */
  title?: string;

  /**
   * @title Subtítulo
   * @default "Aproveite as melhores ofertas!"
   */
  subtitle?: string;

  /**
   * @title Data Final da Promoção
   * @format datetime
   * @default "2024-11-29T23:59:59"
   */
  endDate?: string;

  /**
   * @title Texto do Botão
   * @default "Aproveitar Oferta"
   */
  ctaText?: string;

  /**
   * @title Link do Botão
   * @default "#ofertas"
   */
  ctaLink?: string;

  /**
   * @title Imagem de Fundo Desktop
   */
  backgroundImage?: ImageWidget;

  /**
   * @title Imagem de Fundo Mobile
   */
  backgroundImageMobile?: ImageWidget;

  /**
   * @title Logo
   */
  logo?: ImageWidget;
}

export default function BlackFridayHero({
  title = "BLACK FRIDAY",
  subtitle = "Aproveite as melhores ofertas!",
  endDate = "2024-11-29T23:59:59",
  ctaText = "Aproveitar Oferta",
  ctaLink = "#ofertas",
  backgroundImage,
  backgroundImageMobile,
  logo,
}: Props) {
  const days = useSignal(0);
  const hours = useSignal(0);
  const minutes = useSignal(0);
  const seconds = useSignal(0);

  useEffect(() => {
    const targetDate = new Date(endDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours.value = Math.floor((difference / (1000 * 60 * 60)) % 24);
        minutes.value = Math.floor((difference / 1000 / 60) % 60);
        seconds.value = Math.floor((difference / 1000) % 60);
      } else {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <section class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div
            class="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              opacity: "0.3",
            }}
          />
          {backgroundImageMobile && (
            <div
              class="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImageMobile})`,
                opacity: "0.3",
              }}
            />
          )}
        </>
      )}

      {/* Content Container */}
      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center">
          {/* Logo */}
          {logo && (
            <div class="mb-8 lg:mb-12">
              <img
                src={logo}
                alt="Logo"
                class="h-12 lg:h-16 w-auto mx-auto"
                loading="eager"
              />
            </div>
          )}

          {/* Title */}
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 lg:mb-6 tracking-tighter">
            <span class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-8 lg:mb-12 max-w-3xl">
              {subtitle}
            </p>
          )}

          {/* Countdown Timer */}
          <div class="mb-8 lg:mb-12">
            <div class="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center">
              {/* Days */}
              <div class="flex flex-col items-center">
                <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 min-w-[70px] sm:min-w-[90px] lg:min-w-[120px]">
                  <span class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tabular-nums">
                    {String(days.value).padStart(2, "0")}
                  </span>
                </div>
                <span class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white/80 mt-2 lg:mt-3 uppercase tracking-wider">
                  Dias
                </span>
              </div>

              {/* Hours */}
              <div class="flex flex-col items-center">
                <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 min-w-[70px] sm:min-w-[90px] lg:min-w-[120px]">
                  <span class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tabular-nums">
                    {String(hours.value).padStart(2, "0")}
                  </span>
                </div>
                <span class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white/80 mt-2 lg:mt-3 uppercase tracking-wider">
                  Horas
                </span>
              </div>

              {/* Minutes */}
              <div class="flex flex-col items-center">
                <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 min-w-[70px] sm:min-w-[90px] lg:min-w-[120px]">
                  <span class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tabular-nums">
                    {String(minutes.value).padStart(2, "0")}
                  </span>
                </div>
                <span class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white/80 mt-2 lg:mt-3 uppercase tracking-wider">
                  Minutos
                </span>
              </div>

              {/* Seconds */}
              <div class="flex flex-col items-center">
                <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 min-w-[70px] sm:min-w-[90px] lg:min-w-[120px]">
                  <span class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tabular-nums">
                    {String(seconds.value).padStart(2, "0")}
                  </span>
                </div>
                <span class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white/80 mt-2 lg:mt-3 uppercase tracking-wider">
                  Segundos
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={ctaLink}
            class="group relative inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
          >
            <span class="relative z-10">{ctaText}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Decorative Elements */}
          <div class="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div class="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
}