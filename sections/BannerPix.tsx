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
    <>
      {/* Banner Desktop */}
      <div class="hidden md:block relative w-full max-w-[1440px] mx-auto h-[486px] bg-gradient-to-r from-purple-900 via-pink-800 to-pink-600">
        {imageDesktop ? (
          <img
            src={imageDesktop}
            alt="Banner Desktop"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div class="w-full h-full flex items-center justify-center">
            <p class="text-white text-2xl font-bold opacity-50">
              Adicione uma imagem desktop no admin
            </p>
          </div>
        )}
      </div>

      {/* Banner Mobile */}
      <div class="md:hidden relative w-full max-w-[375px] mx-auto h-[700px] bg-gradient-to-r from-purple-900 via-pink-800 to-pink-600">
        <div class="w-full h-full flex flex-col justify-center items-center gap-2" style="padding: 58px 54px 220px 54px;">
          {imageMobile ? (
            <img
              src={imageMobile}
              alt="Banner Mobile"
              class="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
          ) : (
            <p class="text-white text-xl font-bold opacity-50 text-center relative z-10">
              Adicione uma imagem mobile no admin
            </p>
          )}
        </div>
      </div>
    </>
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
