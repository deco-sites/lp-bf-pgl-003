import { ImageWidget } from "apps/admin/widgets.ts";

interface Step {
  /**
   * @title Número do passo
   */
  number: string;
  
  /**
   * @title Ícone
   * @description Nome do ícone Font Awesome (ex: copy, globe-pointer, cart-circle-plus, percent, check)
   */
  icon: string;
  
  /**
   * @title Título
   */
  title: string;
  
  /**
   * @title Descrição
   */
  description: string;

  /**
   * @title Imagem do ícone (opcional)
   * @description Use esta imagem se não quiser usar Font Awesome
   */
  iconImage?: ImageWidget;
}

export interface Props {
  /**
   * @title Título Principal
   * @default Cupons com nossas marcas parceiras: é hora de parcelar no Pix
   */
  mainTitle?: string;

  /**
   * @title Subtítulo
   * @default Compre direto no site e selecione o Pix Parcelado da Pagaleve na hora de pagar.
   */
  subtitle?: string;

  /**
   * @title Passos
   */
  steps?: Step[];

  /**
   * @title Cor de Fundo
   * @format color
   * @default #000000
   */
  backgroundColor?: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    number: "01",
    icon: "copy",
    title: "Copie o cupom",
    description: "Copie o cupom exclusivo da sua escolha."
  },
  {
    number: "02",
    icon: "globe-pointer",
    title: "Entre no site",
    description: "Entre direto no site da loja parceira escolhida."
  },
  {
    number: "03",
    icon: "cart-circle-plus",
    title: "Adicione ao carrinho",
    description: "Coloque seus produtos favoritos no carrinho."
  },
  {
    number: "04",
    icon: "percent",
    title: "Aplique o cupom",
    description: "Aplique o código de desconto no site da loja no campo de cupom."
  },
  {
    number: "05",
    icon: "",
    title: "Pagar com Pix Parcelado",
    description: "Como pagamento selecione o Pix Parcelado.",
    iconImage: "https://assets.decocache.com/lp-bf-pgl-003/0d2ccde2-9c86-4ea7-83f7-f13997da2f89/pix-icon.png"
  },
  {
    number: "06",
    icon: "check",
    title: "Pague a 1ª parcela",
    description: "Aguarde a aprovação e pague na hora a 1ª parcela para confirmar o pedido"
  }
];

export default function ComoFunciona({
  mainTitle = "Cupons com nossas marcas parceiras: é hora de parcelar no Pix",
  subtitle = "Compre direto no site e selecione o Pix Parcelado da Pagaleve na hora de pagar.",
  steps = DEFAULT_STEPS,
  backgroundColor = "#000000",
}: Props) {
  return (
    <section 
      class="w-full overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div class="w-full max-w-[1440px] mx-auto flex flex-col items-center px-4 md:px-8 lg:px-[52px] py-8 md:py-12 lg:py-[52px]">
        {/* Header */}
        <div class="w-full max-w-[1336px] flex flex-col items-center gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Títulos */}
          <div class="w-full flex flex-col items-center gap-2 md:gap-3">
            <h2
              class="text-center text-xl md:text-2xl lg:text-4xl font-semibold text-white px-4"
              style={{
                fontFamily: "Sora, sans-serif",
              }}
            >
              {mainTitle}
            </h2>
            <p
              class="text-center text-sm md:text-base lg:text-xl text-white/95 px-4"
              style={{
                fontFamily: "Quicksand, sans-serif",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Steps Grid */}
          <div class="w-full overflow-x-auto lg:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0">
            <div class="flex lg:grid lg:grid-cols-6 gap-4 lg:gap-6 min-w-max lg:min-w-0">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  class="relative flex-shrink-0 w-[160px] md:w-[180px] lg:w-auto"
                >
                  {/* Badge com número */}
                  <div
                    class="absolute flex items-center justify-center"
                    style={{
                      width: "32px",
                      height: "30px",
                      backgroundColor: "#FF009B",
                      borderRadius: "20px",
                      top: "-8px",
                      left: "-5px",
                      zIndex: 10,
                    }}
                  >
                    <span
                      class="text-sm font-semibold text-white"
                      style={{
                        fontFamily: "Quicksand, sans-serif",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    class="w-full h-full flex items-center justify-center min-h-[160px] lg:min-h-[184px]"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      border: "1px solid rgba(59, 74, 84, 1)",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  >
                    <div class="flex flex-col items-center justify-center w-full gap-3">
                      {/* Ícone */}
                      <div class="flex items-center justify-center p-2">
                        {step.iconImage ? (
                          <img 
                            src={step.iconImage} 
                            alt={step.title}
                            class="w-6 h-6 object-contain"
                          />
                        ) : step.icon ? (
                          <i
                            class={`fa-regular fa-${step.icon} text-white text-2xl`}
                          />
                        ) : null}
                      </div>

                      {/* Texto */}
                      <div class="flex flex-col items-center w-full gap-1">
                        <h3
                          class="text-center text-sm md:text-base font-semibold text-white"
                          style={{
                            fontFamily: "Quicksand, sans-serif",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          class="text-center text-xs text-white/90"
                          style={{
                            fontFamily: "Quicksand, sans-serif",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
}