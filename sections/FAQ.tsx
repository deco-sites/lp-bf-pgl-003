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
  
  /** @title Subtítulo da Seção */
  subtitle?: string;
  
  /** @title Perguntas Frequentes */
  items?: FAQItem[];
}

const onLoad = () => {
  document.querySelectorAll('.faq-item-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling as HTMLElement;
      const icon = button.querySelector('.faq-icon') as HTMLElement;
      
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
        button.parentElement?.classList.remove('faq-active');
      } else {
        // Fechar todos os outros itens
        document.querySelectorAll('.faq-item-content').forEach(otherContent => {
          if (otherContent !== content) {
            (otherContent as HTMLElement).style.maxHeight = '0px';
          }
        });
        document.querySelectorAll('.faq-icon').forEach(otherIcon => {
          if (otherIcon !== icon) {
            (otherIcon as HTMLElement).style.transform = 'rotate(0deg)';
          }
        });
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('faq-active');
        });
        
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
        button.parentElement?.classList.add('faq-active');
      }
    });
  });
};

export default function FAQ({
  sectionTitle = "Perguntas Frequentes",
  subtitle = "Tire suas dúvidas sobre o Pix Parcelado e nossos cupons de desconto",
  items = []
}: Props) {
  return (
    <>
      <section 
        class="w-full py-[52px] px-[52px]"
        style={{ 
          backgroundColor: '#000000',
          minHeight: 'auto'
        }}
      >
        <div class="max-w-[1336px] mx-auto w-full flex flex-col items-center gap-8">
          {/* Header */}
          <div class="w-full flex flex-col items-center gap-[10px]">
            {/* Título */}
            <div class="flex items-center justify-center gap-2">
              <h2 
                class="font-semibold text-center"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '36px',
                  lineHeight: '45.36px',
                  color: '#FFFFFF',
                  fontWeight: 600
                }}
              >
                {sectionTitle}
              </h2>
            </div>
            
            {/* Subtítulo */}
            <p 
              class="text-center w-full"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '20px',
                lineHeight: '25px',
                color: '#FCFCFC',
                fontWeight: 400
              }}
            >
              {subtitle}
            </p>
          </div>
          
          {/* FAQ Items */}
          <div class="w-full flex flex-col items-center gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                class="faq-item w-full"
                style={{
                  maxWidth: '886px'
                }}
              >
                <div 
                  class="rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'rgba(222, 222, 224, 0.1)',
                    border: 'none'
                  }}
                >
                  <button 
                    class="faq-item-button w-full text-left p-8 flex justify-between items-center gap-[150px]"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span 
                      class="font-medium"
                      style={{
                        fontFamily: 'Instrument Sans, sans-serif',
                        fontSize: '22px',
                        lineHeight: '26.84px',
                        color: '#FFFFFF',
                        opacity: 0.8,
                        fontWeight: 500
                      }}
                    >
                      {item.question}
                    </span>
                    <span 
                      class="faq-icon flex-shrink-0"
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: '13px',
                        transition: 'transform 0.3s ease',
                        transform: 'rotate(0deg)'
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  
                  <div 
                    class="faq-item-content overflow-hidden"
                    style={{ 
                      maxHeight: '0px',
                      transition: 'max-height 0.3s ease-out'
                    }}
                  >
                    <div 
                      class="px-8 pb-8 pt-[14px]"
                      style={{
                        fontFamily: 'Quicksand, sans-serif',
                        fontSize: '16px',
                        lineHeight: '20px',
                        letterSpacing: '0.8px',
                        color: '#FCFCFC',
                        opacity: 0.5,
                        fontWeight: 400
                      }}
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
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