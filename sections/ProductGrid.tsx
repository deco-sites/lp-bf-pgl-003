import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @titleBy name */
export interface Product {
  /** @title Imagem do Produto */
  image: ImageWidget;

  /** @title Nome do Produto */
  name: string;

  /** @title Categoria */
  category?: string;

  logo: ImageWidget;

  /** @title Preço Original */
  originalPrice?: string;

  /** @title Preço com Desconto */
  discountPrice: string;

  /** @title Badge de Desconto */
  /** @description Ex: "-30%", "-50%" */
  badgeDiscount?: string;

  /** @title Avaliação (estrelas) */
  /** @description Número de 0 a 5 */
  rating?: number;

  /** @title Número de Avaliações */
  ratingCount?: number;

  /** @title Texto Parcelamento */
  /** @description Ex: "ou 12x de R$ 5.24 no Pix Parcelado" */
  installmentText?: string;

  /** @title Link do Produto */
  link?: string;

  /** @title Texto do Botão */
  buttonText?: string;
}

export interface Props {
  /** @title Título da Seção */
  sectionTitle?: string;

  /** @title Subtítulo */
  sectionSubtitle?: string;

  /** @title Produtos */
  products?: Product[];

  /** @title Cor de Fundo */
  backgroundColor?: string;

  /** @title Logo Pagaleve (opcional) */
  pagaleveLogo?: ImageWidget;
}

export default function ProductGrid({
  sectionTitle = "Produtos em alta",
  sectionSubtitle = "Aproveite as melhores ofertas e pague com o Pix Parcelado",
  products = [],
  backgroundColor = "#000000",
  pagaleveLogo,
}: Props) {
  return (
    <section
      class="py-8 px-4 md:py-[52px] md:px-[52px]"
      style={{ backgroundColor }}
    >
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col items-center mb-8 md:mb-9">
          <h2
            class="text-white font-bold text-2xl leading-[30.24px] md:text-4xl md:leading-[45.36px] mb-2.5 text-center"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {sectionTitle}
          </h2>
          <p
            class="text-[#FCFCFC] text-sm md:text-2xl text-center max-w-[343px] md:max-w-none"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              lineHeight: '17.5px',
            }}
          >
            {sectionSubtitle}
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-9">
          {products.map((product, index) => (
            <div
              key={index}
              class="bg-[#FCFCFC] rounded-lg md:rounded-2xl overflow-hidden flex flex-col justify-between"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.12)',
              }}
            >
              <div class="p-2 md:p-6 flex flex-col gap-3 md:gap-4">
                <div class="relative w-full aspect-square rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    class="w-full h-full object-cover"
                  />

                  {product.badgeDiscount && (
                    <div
                      class="absolute top-2 left-2 px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#FA3246' }}
                    >
                      <span
                        class="text-white text-xs font-bold uppercase"
                        style={{
                          fontFamily: 'Quicksand, sans-serif',
                          fontWeight: 700,
                          fontSize: '12px',
                          lineHeight: '15px'
                        }}
                      >
                        {product.badgeDiscount}
                      </span>
                    </div>
                  )}
                </div>

                <div class="flex flex-col gap-2 md:gap-3">
                  {product.category && (
                    <div class="flex items-center gap-1 md:gap-2">
                      <div class="flex flex-row justify-between w-full items-center">
                        <div
                          class="px-2 rounded-lg"
                          style={{ border: '0.5px solid #1A2B38' }}
                        >
                          <span
                            class="text-black text-[10px] font-medium capitalize"
                            style={{
                              fontFamily: 'Quicksand, sans-serif',
                              fontWeight: 500,
                              lineHeight: '12.5px'
                            }}
                          >
                            {product.category}
                          </span>
                          <Image
                            width={42}
                            height={22}
                            loading={"lazy"}
                            alt={"logo"}
                            preload={false}
                            src={product.logo}
                          />
                        </div>
                      </div>
                      {pagaleveLogo && (
                        <img
                          src={pagaleveLogo}
                          alt="Pagaleve"
                          class="h-[22px] w-[42px]"
                        />
                      )}
                    </div>
                  )}

                  <h3
                    class="text-black capitalize font-medium text-sm md:text-base leading-[17.5px] md:leading-[20px]"
                    style={{
                      fontFamily: 'Quicksand, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {product.name}
                  </h3>

                  {product.rating !== undefined && (
                    <div class="flex items-center gap-1.5">
                      <div class="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            class="text-[#FDDD32]"
                            style={{ fontSize: '12px' }}
                          >
                            {i < Math.floor(product.rating || 0) ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      {product.ratingCount && (
                        <span
                          class="text-black opacity-60"
                          style={{
                            fontFamily: 'Quicksand, sans-serif',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '15px'
                          }}
                        >
                          ({product.ratingCount})
                        </span>
                      )}
                    </div>
                  )}

                  <div class="flex items-center gap-1">
                    <span
                      class="text-black uppercase font-semibold text-sm md:text-base"
                      style={{
                        fontFamily: 'Quicksand, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '0.7px',
                        lineHeight: '17.5px',
                      }}
                    >
                      {product.discountPrice}
                    </span>
                    {product.originalPrice && (
                      <span
                        class="text-black opacity-60 line-through uppercase"
                        style={{
                          fontFamily: 'Quicksand, sans-serif',
                          fontWeight: 400,
                          fontSize: '10px',
                          lineHeight: '12.5px'
                        }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {product.installmentText && (
                    <p
                      class="text-[10px] leading-[11.5px]"
                      style={{
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 400,
                        color: '#3B4A54'
                      }}
                    >
                      {product.installmentText}
                    </p>
                  )}
                </div>
              </div>

              {product.link && (
                <div class="px-2 pb-2 md:px-6 md:pb-6">
                  <a
                    href={product.link}
                    class="w-full flex items-center justify-center py-2 px-4 md:py-3 md:px-5 rounded-2xl font-bold text-white transition-transform hover:scale-[1.02] text-xs md:text-xl"
                    style={{
                      backgroundColor: '#14242E',
                      fontFamily: 'Quicksand, sans-serif',
                      fontWeight: 600,
                      lineHeight: '15px',
                    }}
                  >
                    {product.buttonText || "Comprar com Cupom"}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}