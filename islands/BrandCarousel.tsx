import { useEffect, useRef } from "preact/hooks";

interface Logo {
  image: string;
  alt: string;
  link?: string;
}

interface Props {
  logos: Logo[];
  speed?: number;
}

export default function BrandCarousel({ logos, speed = 30 }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollContent = scroller.querySelector('[data-scroll-content]') as HTMLDivElement;
    if (!scrollContent) return;

    // Duplicar os logos para criar o efeito infinito
    const clone = scrollContent.cloneNode(true) as HTMLDivElement;
    scroller.appendChild(clone);

    let animationId: number;
    let scrollPosition = 0;
    const scrollWidth = scrollContent.scrollWidth;

    const animate = () => {
      scrollPosition += 0.5;
      
      // Reset quando chegar ao fim
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      
      scroller.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [logos]);

  return (
    <div 
      ref={scrollerRef}
      class="overflow-hidden relative w-full"
      style={{ 
        scrollBehavior: 'unset',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div 
        data-scroll-content
        class="flex items-center gap-12"
        style={{ 
          flexWrap: 'nowrap',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          minWidth: 'max-content'
        }}
      >
        {logos.map((logo, index) => (
          logo.link ? (
            <a 
              key={index}
              href={logo.link}
              class="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <img 
                src={logo.image} 
                alt={logo.alt}
                class="h-[66px] w-auto object-contain"
                style={{ 
                  display: 'block',
                  maxWidth: 'none'
                }}
              />
            </a>
          ) : (
            <div
              key={index}
              class="grayscale opacity-70"
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <img 
                src={logo.image} 
                alt={logo.alt}
                class="h-[66px] w-auto object-contain"
                style={{ 
                  display: 'block',
                  maxWidth: 'none'
                }}
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
}