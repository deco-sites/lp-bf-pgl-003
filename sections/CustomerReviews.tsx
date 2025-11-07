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
  accentColor = "#E91E8C"
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
          <div class="flex items-center justify-center gap-3 mb-4">
            {showIcon && (
              <svg class="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="#008060">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            )}
            <h2 class="text-2xl lg:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>
          <p class="text-base lg:text-lg text-[#00E5CC] font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {reviews?.map((review, index) => (
            <div 
              key={index}
              class="bg-transparent border border-[#333333] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#666666] transition-colors"
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
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white mt-1"
                    style={{ backgroundColor: accentColor }}
                  >
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
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