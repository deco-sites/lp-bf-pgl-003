import { ImageWidget } from "apps/admin/widgets.ts";
import CountdownTimer from "../islands/CountdownTimer.tsx";

export interface Props {
  /**
   * @title Texto do Título (opcional)
   * @description Texto que aparece acima do cronômetro
   */
  title?: string;

  /**
   * @title Data Final do Countdown
   * @format datetime
   * @description Data e hora em que o countdown deve terminar
   */
  expiresAt?: string;

  /**
   * @title Imagem de Fundo Desktop
   * @description Imagem de fundo para desktop (1440px)
   */
  backgroundImage?: ImageWidget;

  /**
   * @title Imagem de Fundo Mobile
   * @description Imagem de fundo para mobile (opcional, se não informada usa a mesma do desktop)
   */
  backgroundImageMobile?: ImageWidget;
}

export default function BlackFridayHero({
  title = "",
  expiresAt = "2025-11-29T23:59:59",
  backgroundImage,
  backgroundImageMobile,
}: Props) {
  // Se não tiver mobile, usa a desktop
  const bgMobile = backgroundImageMobile || backgroundImage;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Estilos base da seção - Mobile */
        .bf-hero-section {
          min-height: 375px;
          padding: 16px 16px 24px 16px;
          max-width: 100vw;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        
        /* Container do conteúdo */
        .bf-hero-content {
          width: 100%;
          max-width: 398px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 10;
          position: relative;
        }
        
        /* Título */
        .bf-hero-title {
          font-family: 'Quicksand', sans-serif;
          font-size: 20px;
          line-height: 25px;
          font-weight: 600;
          color: #FFFFFF;
          text-align: center;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        /* Container do countdown */
        .bf-countdown-container {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
        }
        
        /* Cards do countdown - Mobile */
        .bf-countdown-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 65px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(68px);
          -webkit-backdrop-filter: blur(68px);
          border-radius: 8px;
          padding: 6px 8px;
          box-shadow: 
            0px 11px 31px rgba(0, 0, 0, 0.25),
            inset -33px 33px 33px rgba(255, 255, 255, 0.041),
            inset 33px -33px 33px rgba(149, 149, 149, 0.041);
          flex-shrink: 0;
        }
        
        .bf-countdown-number {
          font-family: 'Quicksand', sans-serif;
          font-size: 32px;
          line-height: 40px;
          font-weight: 500;
          color: #FFFFFF;
          text-align: center;
        }
        
        .bf-countdown-label {
          font-family: 'Quicksand', sans-serif;
          font-size: 9px;
          line-height: 11px;
          font-weight: 600;
          color: #FFFFFF;
          text-align: center;
          text-transform: uppercase;
        }
        
        .bf-countdown-separator {
          font-family: 'Quicksand', sans-serif;
          font-size: 14px;
          color: #FFFFFF;
          flex-shrink: 0;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        /* Tablet e Desktop - Acima de 740px */
        @media (min-width: 740px) {
          .bf-hero-section {
            min-height: 698px;
            padding: 64px 16px;
          }
          
          .bf-hero-title {
            font-size: 24px;
            line-height: 30px;
          }
          
          .bf-countdown-container {
            gap: 10px;
          }
          
          .bf-countdown-card {
            width: 80px;
            height: 90px;
            padding: 8px 12px;
          }
          
          .bf-countdown-number {
            font-size: 48px;
            line-height: 60px;
          }
          
          .bf-countdown-label {
            font-size: 12px;
            line-height: 15px;
          }
          
          .bf-countdown-separator {
            font-size: 16px;
          }
        }
        
        /* Desktop grande - Acima de 1024px */
        @media (min-width: 1024px) {
          .bf-hero-section {
            padding-left: clamp(16px, 10vw, 520px);
            padding-right: clamp(16px, 10vw, 520px);
          }
        }
        
        /* Media query para mobile */
        @media (max-width: 739px) {
          .bf-hero-section {
            background-image: url('${bgMobile}') !important;
          }
        }
      `}} />
      
      <section
        class="bf-hero-section"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div class="bf-hero-content">
          {/* Título - Apenas se existir */}
          {title && (
            <h2 class="bf-hero-title">
              {title}
            </h2>
          )}

          {/* Countdown - Island interativo */}
          <CountdownTimer expiresAt={expiresAt} />
        </div>
      </section>
    </>
  );
}
