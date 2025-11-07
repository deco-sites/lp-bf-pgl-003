import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Imagem de Fundo
   * @description Imagem de fundo do banner (opcional)
   */
  backgroundImage?: ImageWidget;
  
  /**
   * @title Título Principal
   * @description Primeira linha do título
   * @default Pix Parcelado
   */
  title?: string;
  
  /**
   * @title Título Destacado
   * @description Segunda linha do título (em destaque rosa)
   * @default na palma da sua mão
   */
  highlightTitle?: string;
  
  /**
   * @title Descrição
   * @description Texto descritivo do banner
   * @default No nosso App, você encontra lojas exclusivas e consegue acompanhar as suas parcelas.
   */
  description?: string;
  
  /**
   * @title Texto do Botão
   * @description Texto do call-to-action
   * @default Baixe o App
   */
  buttonText?: string;
  
  /**
   * @title Link do Botão
   * @description URL de destino do botão
   */
  buttonLink?: string;
}

export default function BannerPix({
  backgroundImage,
  title = "Pix Parcelado",
  highlightTitle = "na palma da sua mão",
  description = "No nosso App, você encontra lojas exclusivas e consegue acompanhar as suas parcelas.",
  buttonText = "Baixe o App",
  buttonLink = "#",
}: Props) {
  return (
    <section
      class="relative w-full max-w-[1440px] mx-auto h-[486px] px-[221px] py-[60px] flex flex-col justify-end items-start gap-2"
      style={{
        background: backgroundImage
          ? `url(${backgroundImage}) lightgray -116.688px -1.155px / 119.353% 100.443% no-repeat`
          : 'linear-gradient(135deg, #1a0a2e 0%, #6b0f6f 50%, #e91e63 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay para melhor legibilidade do texto */}
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      
      {/* Conteúdo */}
      <div class="relative z-10 flex flex-col gap-4 max-w-[700px]">
        {/* Título */}
        <div class="flex flex-col gap-1">
          <h1 class="text-white text-6xl font-bold leading-tight">
            {title}
          </h1>
          <h2 class="text-[#FF1493] text-6xl font-bold leading-tight">
            {highlightTitle}
          </h2>
        </div>
        
        {/* Descrição */}
        <p class="text-white text-xl leading-relaxed">
          {description}
        </p>
        
        {/* CTA Button */}
        <a
          href={buttonLink}
          class="inline-flex items-center justify-center bg-[#FF1493] hover:bg-[#e91e63] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 max-w-fit mt-4 shadow-lg"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
