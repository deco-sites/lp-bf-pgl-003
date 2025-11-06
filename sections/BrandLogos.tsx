import type { ImageWidget } from "apps/admin/widgets.ts";

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
}

export default function BrandLogos({
  title = "Marcas Parceiras",
  logos = [],
  backgroundColor = "#000000"
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
        
        <div class="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            logo.link ? (
              <a 
                key={index}
                href={logo.link}
                class="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <img 
                  src={logo.image} 
                  alt={logo.alt}
                  class="h-8 object-contain"
                />
              </a>
            ) : (
              <img 
                key={index}
                src={logo.image} 
                alt={logo.alt}
                class="h-8 object-contain grayscale opacity-70"
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}