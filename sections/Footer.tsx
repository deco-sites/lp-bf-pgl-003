export interface Props {
  /** @title Mostrar Footer */
  showFooter?: boolean;
}

function Footer({ showFooter = false }: Props) {
  if (!showFooter) {
    return null;
  }

  return (
    <footer class="bg-black text-white py-8 px-4">
      <div class="container mx-auto max-w-7xl text-center">
        <p class="text-sm opacity-60">© 2024 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;