export interface Props {
  /**
   * @title Link da App Store
   * @description URL para download na App Store
   */
  appStoreUrl?: string;
  
  /**
   * @title Link da Google Play
   * @description URL para download na Google Play
   */
  googlePlayUrl?: string;
}

export default function DownloadApp({
  appStoreUrl = "#",
  googlePlayUrl = "#",
}: Props) {
  return (
    <>
      {/* Section visível apenas em mobile */}
      <section class="md:hidden w-full bg-transparent">
        <div class="w-full flex flex-col items-center justify-center gap-2.5 py-3 px-0">
          {/* Título */}
          <p class="text-white text-sm font-medium text-center" style="font-family: 'Quicksand', sans-serif;">
            Pagaleve App disponível em
          </p>
          
          {/* Botões de Download */}
          <div class="flex flex-col items-center gap-[9px]">
            {/* App Store */}
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="w-36 h-[49px] flex items-center justify-center border border-[#DEDEE0] rounded-2xl bg-transparent hover:bg-white/5 transition-colors"
            >
              <img 
                src="https://assets.decocache.com/lp-bf-pgl-003/399a482b-c46a-4b72-89d3-c29661d1f5d9/app-store-badge.png"
                alt="Baixar na App Store"
                class="w-[111.37px] h-[37px] object-contain"
                loading="lazy"
              />
            </a>
            
            {/* Google Play */}
            <a 
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="w-36 h-[49px] flex items-center justify-center border border-[#DEDEE0] rounded-2xl bg-transparent hover:bg-white/5 transition-colors"
            >
              <img 
                src="https://assets.decocache.com/lp-bf-pgl-003/b1193134-4703-46a3-b1ed-57e2d045454b/google-play-badge.png"
                alt="Baixar na Google Play"
                class="w-[126.5px] h-[37px] object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
