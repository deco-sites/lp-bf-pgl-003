import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy name */
export interface Product {
  /** @title Imagem do Produto */
  image: ImageWidget;
  
  /** @title Nome do Produto */
  name: string;
  
  /** @title Preço Original */
  originalPrice?: string;
  
  /** @title Preço com Desconto */
  discountPrice: string;
  
  /** @title Badge */
  /** @description Ex: "NOVO", "50% OFF" */
  badge?: string;
  
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
  
  /** @title Cor do Card */
  cardBackgroundColor?: string;
  
  /** @title Cor do Texto */
  textColor?: string;
  
  /** @title Cor do Badge */
  badgeColor?: string;
  
  /** @title Cor do Botão */
  buttonColor?: string;
}

export default function ProductGrid({
  sectionTitle = "Produtos em alta",
  sectionSubtitle = "Confira os produtos mais procurados",
  products = [],
  backgroundColor = "#000000",
  cardBackgroundColor = "#ffffff",
  textColor = "#ffffff",
  badgeColor = "#ff0000",
  buttonColor = "#000000"
}: Props) {
  return (
    <section 
      class="py-16 px-4"
      style={{ backgroundColor, color: textColor }}
    >
      <div class="container mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p class="text-lg opacity-80">{sectionSubtitle}</p>
          )}
        </div>
        
        {/* Grid de Produtos */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              class="rounded-2xl overflow-hidden"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              {/* Imagem do Produto */}
              <div class="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  class="w-full h-full object-cover"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div 
                    class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              
              {/* Informações do Produto */}
              <div class="p-4 text-black">
                <h3 class="font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Preços */}
                <div class="mb-4">
                  {product.originalPrice && (
                    <span class="text-sm line-through opacity-50 mr-2">
                      {product.originalPrice}
                    </span>
                  )}
                  <span class="text-lg font-bold">
                    {product.discountPrice}
                  </span>
                </div>
                
                {/* Botão */}
                {product.link && (
                  <a 
                    href={product.link}
                    class="block text-center py-2 px-4 rounded-full font-semibold text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: buttonColor }}
                  >
                    {product.buttonText || "Ver produto"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}