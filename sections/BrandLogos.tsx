import type { ImageWidget } from "apps/admin/widgets.ts";
import BrandCarousel from "../islands/BrandCarousel.tsx";

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
  
  /** @title Logos */
  logos?: Logo[];
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Velocidade do Carrossel */
  /** @description Velocidade da animação (padrão: 30) */
  carouselSpeed?: number;
}

export default function BrandLogos({
  title = "Marcas Parceiras",
  logos = [],
  backgroundColor = "#000000",
  carouselSpeed = 30
}: Props) {
  return (
    <section 
      class="py-12 px-4"
      style={{ backgroundColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {title && (
          <h2 class="text-2xl font-bold text-center text-white mb-8">
            {title}
          </h2>
        )}
        
        <BrandCarousel logos={logos} speed={carouselSpeed} />
      </div>
    </section>
  );
}