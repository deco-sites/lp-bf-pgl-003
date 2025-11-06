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
}: Props) {
  return (
    <section class="w-full bg-transparent overflow-hidden">
      <div 
        class="w-full flex flex-col items-center justify-center"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "52px",
          paddingRight: "52px",
          paddingTop: "52px",
          paddingBottom: "26px",
        }}
      >
        {/* Header */}
        <div class="w-full flex flex-col items-center gap-[10px] mb-6">
          <h2
            class="text-white text-center"
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "45.36px",
              maxWidth: "1182px",
            }}
          >
            {mainTitle}
          </h2>
          <p
            class="text-center w-full"
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "30px",
              color: "#FCFCFC",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          class="w-full flex items-center justify-between gap-[26px]"
          style={{
            maxWidth: "1336px",
            height: "200px",
          }}
        >
          {steps.map((step) => (
            <div key={step.number} class="relative flex-1 max-w-[200px]">
              {/* Badge com número */}
              <div
                class="absolute flex items-center justify-center"
                style={{
                  width: "36px",
                  height: "33px",
                  backgroundColor: "#FF009B",
                  borderRadius: "23px",
                  top: "-8px",
                  left: "-5px",
                  zIndex: 10,
                }}
              >
                <span
                  class="text-white text-center"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "25px",
                    color: "#FCFCFC",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Card */}
              <div
                class="flex flex-col items-center justify-center p-4 h-full"
                style={{
                  width: "200px",
                  height: "184px",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(59, 74, 84, 1)",
                  borderRadius: "12px",
                }}
              >
                <div class="flex flex-col items-center gap-4 flex-1 justify-center">
                  {/* Ícone */}
                  <div class="flex items-center justify-center">
                    {step.iconImage ? (
                      <img 
                        src={step.iconImage} 
                        alt={step.title}
                        style={{
                          width: "28px",
                          height: "25px",
                          objectFit: "contain",
                        }}
                      />
                    ) : step.icon ? (
                      <i
                        class={`fa-regular fa-${step.icon} text-white`}
                        style={{
                          fontSize: "28px",
                          lineHeight: "28px",
                        }}
                      />
                    ) : null}
                  </div>

                  {/* Content */}
                  <div class="flex flex-col items-center gap-[6px] w-full">
                    <h3
                      class="text-white text-center"
                      style={{
                        fontFamily: "Quicksand, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "22.5px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      class="text-center w-full"
                      style={{
                        fontFamily: "Quicksand, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "17.5px",
                        color: "#FCFCFC",
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

      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
}
