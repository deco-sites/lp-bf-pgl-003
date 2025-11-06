import { useScript } from "@deco/deco/hooks";

/** @titleBy question */
export interface FAQItem {
  /** @title Pergunta */
  question: string;
  
  /** @title Resposta */
  /** @format html */
  answer: string;
}

export interface Props {
  /** @title Título da Seção */
  sectionTitle?: string;
  
  /** @title Perguntas Frequentes */
  items?: FAQItem[];
  
  /** @title Cor de Fundo */
  backgroundColor?: string;
  
  /** @title Cor do Item */
  itemBackgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Cor de Destaque */
  accentColor?: string;
}

const onLoad = () => {
  document.querySelectorAll('.faq-item-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling as HTMLElement;
      const icon = button.querySelector('.faq-icon') as HTMLElement;
      
      if (content.style.maxHeight) {
        content.style.maxHeight = '';
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
};

export default function FAQ({
  sectionTitle = "Perguntas Frequentes",
  items = [],
  backgroundColor = "#000000",
  itemBackgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  accentColor = "#ff00ff"
}: Props) {
  return (
    <>
      <section 
        class="py-16 px-4"
        style={{ backgroundColor, color: textColor }}
      >
        <div class="container mx-auto max-w-4xl">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            {sectionTitle}
          </h2>
          
          <div class="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index}
                class="rounded-xl overflow-hidden"
                style={{ backgroundColor: itemBackgroundColor }}
              >
                <button 
                  class="faq-item-button w-full text-left p-6 flex justify-between items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <span class="font-semibold text-lg">{item.question}</span>
                  <span 
                    class="faq-icon text-2xl transition-transform duration-300"
                    style={{ color: accentColor }}
                  >
                    ▼
                  </span>
                </button>
                
                <div 
                  class="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: '0' }}
                >
                  <div 
                    class="p-6 pt-0 opacity-80"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad) }}
      />
    </>
  );
}