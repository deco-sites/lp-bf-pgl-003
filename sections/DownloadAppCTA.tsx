import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
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
          <div class="flex flex-col items-center gap-2">
            <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2.25C2.57812 2.25 2.25 2.625 2.25 3V21C2.25 21.4219 2.57812 21.75 3 21.75H13.5C13.875 21.75 14.25 21.4219 14.25 21V3C14.25 2.625 13.875 2.25 13.5 2.25H3ZM0 3C0 1.35938 1.3125 0 3 0H13.5C15.1406 0 16.5 1.35938 16.5 3V21C16.5 22.6875 15.1406 24 13.5 24H3C1.3125 24 0 22.6875 0 21V3ZM6.75 18.75H9.75C10.125 18.75 10.5 19.125 10.5 19.5C10.5 19.9219 10.125 20.25 9.75 20.25H6.75C6.32812 20.25 6 19.9219 6 19.5C6 19.125 6.32812 18.75 6.75 18.75Z" fill={iconColor}/>
            </svg>
            
            <h2 
              class="text-lg"
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                lineHeight: "18px",
                fontWeight: 600,
                color: titleColor
              }}
            >
              {title}
            </h2>
          </div>
          
          {description && (
            <p 
              class="max-w-[739px] text-sm"
              style={{ 
                fontFamily: "Quicksand, sans-serif",
                color: descriptionColor
              }}
            >
              {description}
            </p>
          )}
          
          <a 
            href={buttonLink}
            class="inline-block rounded-2xl transition-all hover:opacity-90 text-lg"
            style={{ 
              backgroundColor: buttonColor,
              padding: "12px 40px",
              fontFamily: "Quicksand, sans-serif",
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