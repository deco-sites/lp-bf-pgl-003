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
      <div 
        class="w-full max-w-[1440px] mx-auto flex flex-col items-center"
        style={{
          paddingLeft: "52px",
          paddingRight: "52px",
          paddingTop: "52px",
          paddingBottom: "26px",
        }}
      >
        {/* Header */}
        <div 
          class="w-full max-w-[1336px] flex flex-col items-center"
          style={{
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          {/* Títulos */}
          <div 
            class="w-full flex flex-col items-center"
            style={{
              gap: "10px",
            }}
          >
            <h2
              class="text-white text-center"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: "45.36px",
                letterSpacing: "0px",
                margin: "0",
                padding: "0",
              }}
            >
              {mainTitle}
            </h2>
            <p
              class="text-center"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "30px",
                letterSpacing: "0px",
                color: "rgba(252, 252, 252, 1)",
                margin: "0",
                padding: "0",
                width: "100%",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Steps Grid */}
          <div 
            class="w-full flex items-center"
            style={{
              gap: "26px",
              height: "200px",
              justifyContent: "space-between",
            }}
          >
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                class="relative"
                style={{
                  width: "200px",
                  height: "184px",
                  flex: "0 0 200px",
                }}
              >
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
                    padding: "4px 8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "25px",
                      letterSpacing: "0px",
                      color: "rgba(252, 252, 252, 1)",
                      textAlign: "center",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div
                  class="w-full h-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(59, 74, 84, 1)",
                    borderRadius: "12px",
                    padding: "16px",
                  }}
                >
                  <div 
                    class="flex flex-col items-center justify-center w-full"
                    style={{
                      gap: "16px",
                    }}
                  >
                    {/* Conteúdo vertical */}
                    <div 
                      class="flex flex-col items-center w-full"
                      style={{
                        gap: "6px",
                      }}
                    >
                      {/* Ícone */}
                      <div 
                        class="flex items-center justify-center"
                        style={{
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                      >
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
                            class={`fa-regular fa-${step.icon}`}
                            style={{
                              fontSize: "28px",
                              lineHeight: "28px",
                              color: "white",
                            }}
                          />
                        ) : null}
                      </div>

                      {/* Texto */}
                      <div 
                        class="flex flex-col items-center w-full"
                        style={{
                          gap: "6px",
                        }}
                      >
                        <h3
                          class="text-white text-center"
                          style={{
                            fontFamily: "Quicksand, sans-serif",
                            fontSize: "18px",
                            fontWeight: 600,
                            lineHeight: "22.5px",
                            letterSpacing: "0px",
                            margin: "0",
                            padding: "0",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          class="text-center"
                          style={{
                            fontFamily: "Quicksand, sans-serif",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "17.5px",
                            letterSpacing: "0px",
                            color: "rgba(252, 252, 252, 1)",
                            margin: "0",
                            padding: "0",
                            width: "100%",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
