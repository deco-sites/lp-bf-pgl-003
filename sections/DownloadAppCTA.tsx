import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @title Ícone */
  /** @description Ícone FontAwesome ou emoji */
  icon?: string;
  
  /** @title Título */
  title?: string;
  
  /** @title Descrição */
  description?: string;
  
  /** @title Texto do Botão */
  buttonText?: string;
  
  /** @title Link do Botão */
  buttonLink?: string;
  
  /** @title Cor de Fundo */
  /** @format color */
  backgroundColor?: string;
  
  /** @title Cor do Ícone */
  /** @format color */
  iconColor?: string;
  
  /** @title Cor do Título */
  /** @format color */
  titleColor?: string;
  
  /** @title Cor da Descrição */
  /** @format color */
  descriptionColor?: string;
  
  /** @title Cor do Botão */
  /** @format color */
  buttonColor?: string;
  
  /** @title Cor do Texto do Botão */
  /** @format color */
  buttonTextColor?: string;
}

export default function DownloadAppCTA({
  icon = "📱",
  title = "Baixe agora o nosso app!",
  description = "Descubra lojas exclusivas e acompanhe todas as suas parcelas em um só lugar.",
  buttonText = "Baixe o App",
  buttonLink = "#",
  backgroundColor = "#131618",
  iconColor = "#00E16C",
  titleColor = "#FCFCFC",
  descriptionColor = "#DEDEE0",
  buttonColor = "#FF009B",
  buttonTextColor = "#FCFCFC"
}: Props) {
  return (
    <section 
      class="py-[52px] px-4"
      style={{ backgroundColor }}
    >
      <div class="container mx-auto max-w-7xl">
        <div class="flex flex-col items-center justify-center gap-5 text-center">
          {/* Ícone + Título */}
          <div class="flex flex-col items-center gap-2">
            {icon && (
              <div 
                class="text-2xl leading-none"
                style={{ color: iconColor }}
              >
                {icon}
              </div>
            )}
            
            <h2 
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "30px",
                color: titleColor
              }}
            >
              {title}
            </h2>
          </div>
          
          {/* Descrição */}
          {description && (
            <p 
              class="max-w-[739px]"
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "25px",
                color: descriptionColor
              }}
            >
              {description}
            </p>
          )}
          
          {/* Botão */}
          <a 
            href={buttonLink}
            class="inline-block rounded-2xl transition-all hover:opacity-90"
            style={{ 
              backgroundColor: buttonColor,
              padding: "12px 40px",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              color: buttonTextColor
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}