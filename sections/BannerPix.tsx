import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Imagem Desktop
   * @description Imagem do banner para desktop (1440x486px recomendado)
   */
  imageDesktop?: ImageWidget;
  
  /**
   * @title Imagem Mobile
   * @description Imagem do banner para dispositivos móveis (375x700px recomendado)
   */
  imageMobile?: ImageWidget;
  
  /**
   * @title Link do Banner (Opcional)
   * @description URL para onde o banner vai redirecionar ao ser clicado
   */
  link?: string;
}

export default function BannerPix({
  imageDesktop,
  imageMobile,
  link,
}: Props) {
  const BannerContent = () => (
    <div class="w-full">
      {/* Banner Desktop */}
      <div class="hidden md:block relative w-full bg-gradient-to-r from-purple-900 via-pink-800 to-pink-600">
        {imageDesktop ? (
          <img
            src={imageDesktop}
            alt="Banner Desktop"
            class="w-full h-auto object-cover"
            loading="lazy"
            style="aspect-ratio: 1440 / 486;"
          />
        ) : (
          <div class="w-full flex items-center justify-center" style="aspect-ratio: 1440 / 486;">
            <p class="text-white text-xl md:text-2xl font-bold opacity-50 text-center px-4">
              Adicione uma imagem desktop no admin
            </p>
          </div>
        )}
      </div>

      {/* Banner Mobile */}
      <div class="md:hidden relative w-full bg-gradient-to-r from-purple-900 via-pink-800 to-pink-600">
        {imageMobile ? (
          <div class="relative w-full" style="aspect-ratio: 375 / 700;">
            <img
              src={imageMobile}
              alt="Banner Mobile"
              class="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
            <div class="relative flex flex-col justify-center items-center gap-2 h-full" style="padding: 15.47% 14.4% 58.67% 14.4%;">
              {/* Conteúdo opcional sobre a imagem */}
            </div>
          </div>
        ) : (
          <div 
            class="w-full flex flex-col justify-center items-center gap-2"
            style="aspect-ratio: 375 / 700; padding: 15.47% 14.4% 58.67% 14.4%;"
          >
            <p class="text-white text-lg font-bold opacity-50 text-center px-4">
              Adicione uma imagem mobile no admin
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} class="block w-full">
        <BannerContent />
      </a>
    );
  }

  return <BannerContent />;
}
