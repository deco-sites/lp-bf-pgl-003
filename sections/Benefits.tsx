import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy title */
export interface Benefit {
  /** @title Ícone */
  icon?: ImageWidget;
  
  /** @title Título */
  title: string;
  
  /** @title Descrição */
  description: string;
}

export interface Props {
  /** @title Título da Seção */
  sectionTitle?: string;
  
  /** @title Benefícios */
  benefits?: Benefit[];
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Cor do Card */
  cardBackgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Cor de Destaque */
  accentColor?: string;
}

export default function Benefits({
  sectionTitle = "É tudo de bom demais da conta. Inacreditável!",
  benefits = [],
  backgroundColor = "#000000",
  cardBackgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  accentColor = "#ff00ff"
}: Props) {
  return (
    <section 
      class="py-16 px-4"
      style={{ backgroundColor, color: textColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {sectionTitle && (
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            {sectionTitle}
          </h2>
        )}
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              class="rounded-2xl p-6 text-center"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              {benefit.icon && (
                <div class="mb-4 flex justify-center">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    class="w-16 h-16 object-contain"
                  />
                </div>
              )}
              
              <h3 
                class="text-xl font-bold mb-3"
                style={{ color: accentColor }}
              >
                {benefit.title}
              </h3>
              
              <p class="text-sm opacity-80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}