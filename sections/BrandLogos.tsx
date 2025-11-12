import type { ImageWidget } from "apps/admin/widgets.ts";
import BrandCarousel from "../islands/BrandCarousel.tsx";
import Image from "apps/website/components/Image.tsx";

/** @titleBy alt */
export interface Logo {
  /** @title Logo */
  image: ImageWidget;
  
  /** @title Nome da Marca */
  alt: string;
  
  /** @title Link */
  link?: string;
}

export interface Props {
  /** @title Título da Seção */
  title?: string;
  
  /** @title Ícone Personalizado */
  /** @description Faça upload de um ícone personalizado (deixe vazio para usar o padrão) */
  customIcon?: ImageWidget;
  
  /** @title Tamanho do Ícone (px) */
  /** @description Tamanho do ícone em pixels (padrão: 24) */
  iconSize?: number;
  
  /** @title Logos */
  logos?: Logo[];
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Velocidade do Carrossel */
  /** @description Velocidade da animação (padrão: 30) */
  carouselSpeed?: number;
}

// Ícone SVG padrão
const DefaultIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 23 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path 
      d="M2.71875 5.95312C2.4375 6.09375 2.29688 6.32812 2.29688 6.5625C2.29688 10.875 4.07812 18.2344 11.0156 21.5625C11.1562 21.6562 11.3906 21.6562 11.5312 21.5625C18.4688 18.2812 20.25 10.875 20.2969 6.5625C20.2969 6.32812 20.1094 6.09375 19.875 5.95312L11.2969 2.34375L2.71875 5.95312ZM20.7188 3.89062C21.75 4.35938 22.5469 5.34375 22.5469 6.5625C22.5 11.25 20.5781 19.7344 12.5156 23.625C11.7188 24 10.8281 24 10.0312 23.625C1.96875 19.7344 0.046875 11.25 0.046875 6.5625C0 5.34375 0.796875 4.35938 1.82812 3.89062L10.6406 0.140625C10.8281 0.046875 11.0625 0 11.2969 0C11.4844 0 11.7188 0.046875 11.9062 0.140625L20.7188 3.89062ZM16.5938 9.79688L10.5938 15.7969C10.125 16.2656 9.42188 16.2656 9 15.7969L6 12.7969C5.53125 12.375 5.53125 11.6719 6 11.25C6.42188 10.7812 7.125 10.7812 7.59375 11.25L9.79688 13.4531L15 8.25C15.4219 7.78125 16.125 7.78125 16.5938 8.25C17.0156 8.67188 17.0156 9.375 16.5938 9.79688Z" 
      fill="#00E16C"
    />
  </svg>
);

export default function BrandLogos({
  title = "Marcas Parceiras",
  customIcon,
  iconSize = 24,
  logos = [],
  backgroundColor = "#131618",
  carouselSpeed = 30
}: Props) {
  return (
    <section 
      class="py-12 px-4"
      style={{ backgroundColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {title && (
          <div class="flex flex-col lg:flex-row items-center justify-center gap-3 mb-8">
            {customIcon ? (
              <Image
                src={customIcon}
                alt="Ícone"
                width={iconSize}
                height={iconSize}
                style={{ flexShrink: 0 }}
              />
            ) : (
              <DefaultIcon size={iconSize} />
            )}
            <h2 
              class="font-bold text-white text-lg lg:text-2xl text-center"
            >
              {title}
            </h2>
          </div>
        )}
        
        <BrandCarousel logos={logos} speed={carouselSpeed} />
      </div>
    </section>
  );
}