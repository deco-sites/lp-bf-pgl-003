import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Link {
  label: string;
  href: string;
}

export interface SocialMedia {
  icon: "instagram" | "facebook" | "linkedin" | "tiktok";
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  tagline?: string;
  
  /** @title Institucional */
  institutionalLinks?: Link[];
  
  /** @title Ajuda */
  helpLinks?: Link[];
  
  /** @title Parcerias e Políticas */
  partnershipsLinks?: Link[];
  
  /** @title App Store */
  appStoreTitle?: string;
  appStoreUrl?: string;
  
  /** @title Google Play */
  googlePlayUrl?: string;
  
  /** @title Redes Sociais */
  socialMedia?: SocialMedia[];
  
  /** @title Copyright */
  copyright?: string;
  
  /** @title Informações Adicionais */
  additionalInfo?: string;
}

const SOCIAL_ICONS = {
  instagram: "\uf16d",
  facebook: "\uf39e",
  linkedin: "\uf08c",
  tiktok: "\ue07b",
};

export default function FooterPagaleve({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/f3cca343-e9c2-ace6-2a73-c7aab99ff14b",
  tagline = "A fintech que transforma sua forma de pagar. Pix Parcelado sem cartão.",
  institutionalLinks = [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Trabalhe Conosco", href: "/carreiras" },
    { label: "Mapa do Site", href: "/mapa-do-site" },
  ],
  helpLinks = [
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Ajuda", href: "/ajuda" },
    { label: "Onde Comprar", href: "/onde-comprar" },
  ],
  partnershipsLinks = [
    { label: "Programa de Parcerias", href: "/parcerias" },
    { label: "Varejista", href: "/varejista" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ],
  appStoreTitle = "Pagaleve App disponível em",
  appStoreUrl = "https://apps.apple.com/",
  googlePlayUrl = "https://play.google.com/",
  socialMedia = [
    { icon: "instagram", href: "https://instagram.com/pagaleve" },
    { icon: "facebook", href: "https://facebook.com/pagaleve" },
    { icon: "linkedin", href: "https://linkedin.com/company/pagaleve" },
    { icon: "tiktok", href: "https://tiktok.com/@pagaleve" },
  ],
  copyright = "© 2025, Pagaleve Instituicao de Pagamento Ltda. Todos os direitos reservados.",
  additionalInfo = "Atendimento de segunda a sexta-feira, das 9h00 às 18h00. - CNPJ: 42.563.672/0001-55",
}: Props) {
  return (
    <footer class="bg-black text-white py-12">
      <div class="container mx-auto px-4 lg:px-[52px]">
        {/* Main Footer Content */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div class="flex flex-col gap-6">
            <img
              src={logo}
              alt="Pagaleve"
              class="h-[30px] w-auto"
            />
            <p class="font-quicksand text-sm font-normal text-[#737373] leading-relaxed max-w-[280px]">
              {tagline}
            </p>
          </div>

          {/* Column 2: Institucional */}
          <div class="flex flex-col gap-6">
            <h3 class="font-sora text-base font-semibold text-white">
              Institucional
            </h3>
            <nav class="flex flex-col gap-4">
              {institutionalLinks?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  class="font-quicksand text-sm font-normal text-[#737373] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Ajuda */}
          <div class="flex flex-col gap-6">
            <h3 class="font-sora text-base font-semibold text-white">
              Ajuda
            </h3>
            <nav class="flex flex-col gap-4">
              {helpLinks?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  class="font-quicksand text-sm font-normal text-[#737373] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Parcerias e Políticas */}
          <div class="flex flex-col gap-6">
            <h3 class="font-sora text-base font-semibold text-white">
              Parcerias e Políticas
            </h3>
            <nav class="flex flex-col gap-4">
              {partnershipsLinks?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  class="font-quicksand text-sm font-normal text-[#737373] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 5: App Download & Social Media */}
          <div class="flex flex-col items-start lg:items-end gap-6">
            <p class="font-quicksand text-sm font-normal text-[#737373]">
              {appStoreTitle}
            </p>
            
            <div class="flex flex-col gap-4 w-full max-w-[202px]">
              {/* App Store Button */}
              <a
                href={appStoreUrl}
                class="flex items-center gap-3 px-4 py-2.5 border border-white rounded-xl hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-8 h-8" viewBox="0 0 36 43" fill="none">
                  <path d="M29.3 21.5c0-4.5 3.7-6.7 3.9-6.8-2.1-3.1-5.4-3.5-6.6-3.6-2.8-.3-5.4 1.6-6.8 1.6-1.4 0-3.6-1.6-5.9-1.5-3 0-5.8 1.7-7.4 4.4-3.1 5.4-.8 13.4 2.2 17.8 1.5 2.2 3.3 4.6 5.7 4.5 2.2-.1 3.1-1.4 5.8-1.4 2.7 0 3.5 1.4 5.9 1.4 2.4-.1 4-2.1 5.5-4.3 1.8-2.6 2.5-5.1 2.5-5.2-.1 0-4.8-1.8-4.8-7.1zM24.9 7.5c1.2-1.5 2-3.6 1.8-5.7-1.7.1-3.8 1.1-5 2.6-1.1 1.3-2.1 3.4-1.8 5.4 1.9.1 3.9-.9 5-2.3z" fill="white"/>
                </svg>
                <div class="flex flex-col font-quicksand">
                  <span class="text-xs font-normal text-white leading-tight">Disponível na</span>
                  <span class="text-lg font-semibold text-white leading-tight">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href={googlePlayUrl}
                class="flex items-center gap-3 px-4 py-2.5 border border-white rounded-xl hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-8 h-8" viewBox="0 0 35 38" fill="none">
                  <path d="M2.16 1.03c-.7.4-1.2 1.2-1.2 2.2v31.5c0 1 .5 1.8 1.2 2.2l.1.1 17.6-17.7v-.4L2.16 1.03z" fill="url(#a)"/>
                  <path d="M25.66 24.9l-5.9-5.9v-.4l5.9-5.9.1.1 7 4c2 1.1 2 3 0 4.2l-7 4-.1-.1z" fill="url(#b)"/>
                  <path d="M25.76 24.8l-6-6-17.6 17.6c.7.7 1.8.8 3 .1l20.6-11.7" fill="url(#c)"/>
                  <path d="M25.76 13.2L5.16 1.5c-1.2-.7-2.3-.6-3 .1l17.6 17.6 6-6z" fill="url(#d)"/>
                  <defs>
                    <linearGradient id="a" x1="19.9" y1="2.3" x2="6.1" y2="16.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00A0FF"/>
                      <stop offset=".01" stop-color="#00A1FF"/>
                      <stop offset=".26" stop-color="#00BEFF"/>
                      <stop offset=".51" stop-color="#00D2FF"/>
                      <stop offset=".76" stop-color="#00DFFF"/>
                      <stop offset="1" stop-color="#00E3FF"/>
                    </linearGradient>
                    <linearGradient id="b" x1="34.9" y1="18.8" x2="1.6" y2="18.8" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFE000"/>
                      <stop offset=".41" stop-color="#FFBD00"/>
                      <stop offset=".78" stop-color="#FFA500"/>
                      <stop offset="1" stop-color="#FF9C00"/>
                    </linearGradient>
                    <linearGradient id="c" x1="22.7" y1="21.6" x2="-.5" y2="44.8" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF3A44"/>
                      <stop offset="1" stop-color="#C31162"/>
                    </linearGradient>
                    <linearGradient id="d" x1="4.3" y1="-.9" x2="16.6" y2="11.4" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#32A071"/>
                      <stop offset=".07" stop-color="#2DA771"/>
                      <stop offset=".48" stop-color="#15CF74"/>
                      <stop offset=".8" stop-color="#06E775"/>
                      <stop offset="1" stop-color="#00F076"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div class="flex flex-col font-quicksand">
                  <span class="text-xs font-normal text-white leading-tight">Disponível no</span>
                  <span class="text-lg font-semibold text-white leading-tight">Google Play</span>
                </div>
              </a>
            </div>

            {/* Social Media Icons */}
            <div class="flex gap-3">
              {socialMedia?.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span
                    class="text-black text-base"
                    style={{ fontFamily: 'Font Awesome 6 Brands' }}
                  >
                    {SOCIAL_ICONS[social.icon]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div class="border-t border-[#1F1F1F] mb-8"></div>

        {/* Bottom Footer */}
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex flex-col items-center md:items-start gap-2">
            <p class="font-quicksand text-xs font-normal text-[#737373] text-center md:text-left">
              {copyright}
            </p>
            <p class="font-quicksand text-xs font-normal text-[#737373] text-center md:text-left">
              {additionalInfo}
            </p>
          </div>
          
          <div class="flex items-center gap-2 font-quicksand">
            <span class="text-xs font-normal text-[#737373]">Desenvolvido por</span>
            <a
              href="https://www.tec4udigital.com/?utm_source=pagaleve&utm_medium=rodape"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-normal text-[#737373] hover:text-white transition-colors"
            >
              TEC4U
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
