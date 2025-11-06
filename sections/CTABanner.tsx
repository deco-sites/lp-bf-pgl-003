import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @title Título */
  title?: string;
  
  /** @title Subtítulo */
  subtitle?: string;
  
  /** @title Texto do Botão */
  buttonText?: string;
  
  /** @title Link do Botão */
  buttonLink?: string;
  
  /** @title Imagem de Fundo */
  backgroundImage?: ImageWidget;
  
  /** @title Imagem do Mockup */
  mockupImage?: ImageWidget;
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Cor do Botão */
  buttonColor?: string;
  
  /** @title Cor do Texto do Botão */
  buttonTextColor?: string;
}

export default function CTABanner({
  title = "Pix Parcelado na palma da sua mão",
  subtitle = "Baixe o app e aproveite!",
  buttonText = "Baixar agora",
  buttonLink = "#",
  backgroundImage,
  mockupImage,
  backgroundColor = "#ff00ff",
  textColor = "#ffffff",
  buttonColor = "#000000",
  buttonTextColor = "#ffffff"
}: Props) {
  return (
    <section 
      class="relative py-20 px-4 overflow-hidden"
      style={{ 
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div class="text-center lg:text-left" style={{ color: textColor }}>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h2>
            
            {subtitle && (
              <p class="text-xl mb-8 opacity-90">
                {subtitle}
              </p>
            )}
            
            {buttonLink && (
              <a 
                href={buttonLink}
                class="inline-block py-4 px-8 rounded-full font-bold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: buttonColor, color: buttonTextColor }}
              >
                {buttonText}
              </a>
            )}
          </div>
          
          {/* Mockup */}
          {mockupImage && (
            <div class="flex justify-center lg:justify-end">
              <img 
                src={mockupImage} 
                alt="App Mockup"
                class="max-w-xs md:max-w-md"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}