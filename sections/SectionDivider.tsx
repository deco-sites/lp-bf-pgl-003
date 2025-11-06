export interface Props {
  /** @title Título */
  title?: string;
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Mostrar Linha Decorativa */
  showLine?: boolean;
  
  /** @title Cor da Linha */
  lineColor?: string;
}

export default function SectionDivider({
  title = "Marcas exclusivas do App de Pagbank",
  backgroundColor = "#000000",
  textColor = "#ffffff",
  showLine = true,
  lineColor = "#333333"
}: Props) {
  return (
    <section 
      class="py-8 px-4"
      style={{ backgroundColor }}
    >
      <div class="container mx-auto max-w-7xl">
        <div class="flex items-center gap-6">
          {showLine && (
            <div 
              class="flex-1 h-px"
              style={{ backgroundColor: lineColor }}
            />
          )}
          
          <h2 
            class="text-2xl md:text-3xl font-bold whitespace-nowrap"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          
          {showLine && (
            <div 
              class="flex-1 h-px"
              style={{ backgroundColor: lineColor }}
            />
          )}
        </div>
      </div>
    </section>
  );
}