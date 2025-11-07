import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Imagem do Banner
   * @description Imagem do banner (1440x486px recomendado)
   */
  image?: ImageWidget;
  
  /**
   * @title Link do Banner (Opcional)
   * @description URL para onde o banner vai redirecionar ao ser clicado
   */
  link?: string;
}

export default function BannerPix({
  image,
  link,
}: Props) {
  const BannerContent = () => (
    <div class="relative w-full max-w-[1440px] mx-auto h-[486px] bg-gradient-to-r from-purple-900 via-pink-800 to-pink-600">
      {image ? (
        <img
          src={image}
          alt="Banner"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div class="w-full h-full flex items-center justify-center">
          <p class="text-white text-2xl font-bold opacity-50">
            Adicione uma imagem no admin
          </p>
        </div>
      )}
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
