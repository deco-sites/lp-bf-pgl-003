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
  const content = (
    <section
      class="relative w-full max-w-[1440px] mx-auto h-[486px] overflow-hidden"
      style={{
        background: image
          ? `url(${image}) center / cover no-repeat`
          : 'linear-gradient(135deg, #1a0a2e 0%, #6b0f6f 50%, #e91e63 100%)',
      }}
    >
      {!image && (
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-white text-2xl font-bold opacity-50">
            Adicione uma imagem no admin
          </p>
        </div>
      )}
    </section>
  );

  // Se houver link, envolve o banner em um <a>
  if (link) {
    return (
      <a href={link} class="block">
        {content}
      </a>
    );
  }

  return content;
}
