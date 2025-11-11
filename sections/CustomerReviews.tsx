import type { ImageWidget } from "apps/admin/widgets.ts";
import { TextArea } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";

/**
 * @title Avaliação de Cliente
 */
export interface Review {
  /**
   * @title Nome do Cliente
   * @default Ana Santos
   */
  name: string;

  /**
   * @title Iniciais do Avatar
   * @description Até 2 letras para aparecer no avatar
   * @default AS
   */
  initials: string;

  /**
   * @title Badge
   * @description Ex: Embaixadora, Embaixador, Cliente VIP
   * @default Embaixadora
   */
  badge: string;

  /**
   * @title Avaliação (1-5 estrelas)
   * @default 5
   */
  rating: 1 | 2 | 3 | 4 | 5;

  /**
   * @title Depoimento
   * @default Facilita muito quem não quer usar o crédito que tem e pode. Ótimo app para quem quer parcelar e recebe pagamentos menores todos os dias.
   */
  testimonial: TextArea;
}

export interface Props {
  /**
   * @title Ícone do Título
   * @description Mostrar ícone ao lado do título
   * @default true
   */
  showIcon?: boolean;

  /**
   * @title Título
   * @default O que os nossos consumidores estão falando?
   */
  title?: string;

  /**
   * @title Subtítulo
   * @default Milhões de consumidores já parcelaram suas compras no Pix com a Pagaleve
   */
  subtitle?: string;

  /**
   * @title Avaliações
   */
  reviews?: Review[];

  /**
   * @title Texto do Botão CTA
   * @default Baixe o App e experimente você também
   */
  ctaText?: string;

  /**
   * @title Link do Botão CTA
   * @default #
   */
  ctaLink?: string;

  /**
   * @title Cor de Fundo
   * @default #000000
   */
  backgroundColor?: string;

  /**
   * @title Cor do Avatar/Badge
   * @default #E91E8C
   */
  accentColor?: string;
}

export default function CustomerReviews({
  showIcon = true,
  title = "O que os nossos consumidores estão falando?",
  subtitle = "Milhões de consumidores já parcelaram suas compras no Pix com a Pagaleve",
  reviews = [
    {
      name: "Ana Santos",
      initials: "AS",
      badge: "Embaixadora",
      rating: 5,
      testimonial: "Facilita muito quem não quer usar o crédito que tem e pode. Ótimo app para quem quer parcelar e recebe pagamentos menores todos os dias."
    },
    {
      name: "Débora Maria",
      initials: "DM",
      badge: "Embaixadora",
      rating: 5,
      testimonial: "Excelente! Gostei muito. Uma opção alternativa àquelas opções que já estamos com pouco limite, ou o vencimento do cartão muito próximo."
    },
    {
      name: "Lucas Rodrigues",
      initials: "LR",
      badge: "Embaixador",
      rating: 5,
      testimonial: "Muito Prático e com Juros justo. Facilita demais quem precisa comprar com pix parcelado com pagamento de 15/15 dias. O limite vai sobre na medida que vai usando o serviço."
    },
    {
      name: "Anderson Lima",
      initials: "AL",
      badge: "Embaixador",
      rating: 5,
      testimonial: "O maior quebra galho da minhas compras que não consigo pagar a vista, podendo parcelar sem cartão."
    }
  ],
  ctaText = "Baixe o App e experimente você também",
  ctaLink = "#",
  backgroundColor = "#000000",
  accentColor = "#F77ACF1A"
}: Props) {

  const StarRating = ({ rating }: { rating: number }) => (
    <div class="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          class="w-5 h-5"
          fill={star <= rating ? "#FFC453" : "#404040"}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      class="w-full py-12 lg:py-20 px-4"
      style={{ backgroundColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {/* Header */}
        <div class="text-center mb-12 lg:mb-16">
          <div class="flex flex-col lg:flex-row items-center justify-center gap-3 mb-4">
            {showIcon && (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                <path d="M4.5 3.89062C4.5 4.73438 4.92188 5.4375 5.625 5.85938C6.28125 6.28125 7.17188 6.28125 7.875 5.85938C8.53125 5.4375 9 4.73438 9 3.89062C9 3.09375 8.53125 2.39062 7.875 1.96875C7.17188 1.54688 6.28125 1.54688 5.625 1.96875C4.92188 2.39062 4.5 3.09375 4.5 3.89062ZM10.5 3.89062C10.5 5.25 9.75 6.46875 8.625 7.17188C7.45312 7.82812 6 7.82812 4.875 7.17188C3.70312 6.46875 3 5.25 3 3.89062C3 2.57812 3.70312 1.35938 4.875 0.65625C6 0 7.45312 0 8.625 0.65625C9.75 1.35938 10.5 2.57812 10.5 3.89062ZM15 7.64062C13.9219 7.64062 12.9375 8.25 12.375 9.14062C11.8594 10.0781 11.8594 11.25 12.375 12.1406C12.9375 13.0781 13.9219 13.6406 15 13.6406C16.0312 13.6406 17.0156 13.0781 17.5781 12.1406C18.0938 11.25 18.0938 10.0781 17.5781 9.14062C17.0156 8.25 16.0312 7.64062 15 7.64062ZM15 15.1406C13.3594 15.1406 11.9062 14.2969 11.0625 12.8906C10.2656 11.5312 10.2656 9.79688 11.0625 8.39062C11.9062 7.03125 13.3594 6.14062 15 6.14062C16.5938 6.14062 18.0469 7.03125 18.8906 8.39062C19.6875 9.79688 19.6875 11.5312 18.8906 12.8906C18.0469 14.2969 16.5938 15.1406 15 15.1406ZM12.2344 18.1406C9.70312 18.1406 7.59375 20.1562 7.5 22.6406H22.4531C22.3594 20.1562 20.25 18.1406 17.7188 18.1406H12.2344ZM12.2344 16.6406H17.7188C21.1875 16.6406 24 19.4531 24 22.9219C24 23.625 23.4375 24.1406 22.7344 24.1406H7.21875C6.51562 24.1406 6 23.5781 6 22.9219C6 19.4531 8.76562 16.6406 12.2344 16.6406ZM24 1.64062C23.1562 1.64062 22.4531 2.10938 22.0312 2.76562C21.6094 3.46875 21.6094 4.35938 22.0312 5.01562C22.4531 5.71875 23.1562 6.14062 24 6.14062C24.7969 6.14062 25.5 5.71875 25.9219 5.01562C26.3438 4.35938 26.3438 3.46875 25.9219 2.76562C25.5 2.10938 24.7969 1.64062 24 1.64062ZM24 7.64062C22.6406 7.64062 21.4219 6.9375 20.7188 5.76562C20.0625 4.64062 20.0625 3.1875 20.7188 2.01562C21.4219 0.890625 22.6406 0.140625 24 0.140625C25.3125 0.140625 26.5312 0.890625 27.2344 2.01562C27.8906 3.1875 27.8906 4.64062 27.2344 5.76562C26.5312 6.9375 25.3125 7.64062 24 7.64062ZM24.75 10.6406H21C21 10.125 20.9062 9.65625 20.8125 9.14062H24.75C27.6094 9.14062 30 11.5312 30 14.3906C30 14.8125 29.625 15.1406 29.25 15.1406C28.8281 15.1406 28.5 14.8125 28.5 14.3906C28.5 12.3281 26.8125 10.6406 24.75 10.6406ZM9 10.6406H5.25C3.14062 10.6406 1.5 12.3281 1.5 14.3906C1.5 14.8125 1.125 15.1406 0.75 15.1406C0.328125 15.1406 0 14.8125 0 14.3906C0 11.5312 2.34375 9.14062 5.25 9.14062H9.1875C9.04688 9.65625 9 10.125 9 10.6406Z" fill="#00E16C" />
              </svg>
            )}
            <h2 class="text-lg lg:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>
          <p class="text-xl text-[#FCFCFC] font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {reviews?.map((review, index) => (
            <div
              key={index}
              class="bg-[#DEDEE01A] border border-[#333333] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#666666] transition-colors"
            >
              {/* Avatar and Name */}
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  {review.initials}
                </div>
                <div class="flex-1">
                  <h3 class="text-white font-semibold text-base">
                    {review.name}
                  </h3>
                  <span
                    class="inline-flex items-center gap-1 py-1 rounded-full text-xs text-white mt-1 px-4"
                    style={{ backgroundColor: "#171A1E", border: "1px solid #FF009C" }}

                  >
                    <svg class="w-3 h-3" fill="white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {review.badge}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <StarRating rating={review.rating} />

              {/* Testimonial */}
              <p class="text-[#c7c7c7] text-sm leading-relaxed flex-1">
                {review.testimonial}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div class="text-center">
          <a
            href={ctaLink}
            class="inline-block px-8 lg:px-12 py-4 rounded-full text-white font-semibold text-base lg:text-lg transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}