import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "../sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
export default defineApp(async (_req, ctx) => {
    const revision = await Context.active().release?.revision();
    return (<>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any"/>

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin"/>

        {/* SEO Meta Tags - CRITICAL FOR SEO SCORE */}
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Black Friday Pagaleve 2025 - Cupons Exclusivos e Pix Parcelado | Até 50% OFF</title>
        <meta name="description" content="Aproveite a Black Friday Pagaleve 2025! Cupons exclusivos com até 50% OFF nas melhores marcas. Parcele suas compras no Pix sem cartão de crédito. Confira ofertas imperdíveis!"/>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lp-bf-pgl-003.deco.site/"/>
        <meta property="og:title" content="Black Friday Pagaleve 2025 - Cupons Exclusivos | Até 50% OFF"/>
        <meta property="og:description" content="Cupons exclusivos para Black Friday com até 50% OFF. Parcele no Pix sem cartão de crédito!"/>
        <meta property="og:image" content="https://assets.decocache.com/lp-bf-pgl-003/99715589-da2d-4d19-9b8c-4cec43eab8e6/site-screenshot.png"/>
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://lp-bf-pgl-003.deco.site/"/>
        <meta property="twitter:title" content="Black Friday Pagaleve 2025 - Cupons Exclusivos"/>
        <meta property="twitter:description" content="Cupons com até 50% OFF. Parcele no Pix sem cartão!"/>
        <meta property="twitter:image" content="https://assets.decocache.com/lp-bf-pgl-003/99715589-da2d-4d19-9b8c-4cec43eab8e6/site-screenshot.png"/>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://lp-bf-pgl-003.deco.site/"/>

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://assets.decocache.com"/>
        <link rel="dns-prefetch" href="https://assets.decocache.com"/>
        
        {/* Tailwind CSS with revision for cache busting - add preload with high priority */}
        <link rel="preload" href={asset(`/styles.css?revision=${revision}`)} as="style"/>
        <link href={asset(`/styles.css?revision=${revision}`)} rel="stylesheet"/>

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")}/>
        
        {/* Favicon optimization */}
        <link rel="icon" type="image/x-icon" href={asset("/favicon.ico")}/>
        <link rel="icon" type="image/png" sizes="16x16" href={asset("/favicon-16x16.png")}/>
        <link rel="icon" type="image/png" sizes="32x32" href={asset("/favicon-32x32.png")}/>
        <link rel="apple-touch-icon" sizes="180x180" href={asset("/apple-touch-icon.png")}/>

        {/* Global styles to prevent horizontal overflow on mobile */}
        <style dangerouslySetInnerHTML={{__html: `
          /* Reset body and html to prevent overflow */
          html, body {
            overflow-x: hidden;
            max-width: 100vw;
            margin: 0;
            padding: 0;
          }
          
          /* Prevent all elements from overflowing */
          * {
            box-sizing: border-box;
          }
          
          /* Fix for sections that might overflow */
          section, div {
            max-width: 100%;
          }
          
          /* Ensure images don't overflow */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Fix for containers with padding that might cause overflow */
          @media (max-width: 739px) {
            .container, [class*="container"] {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        `}} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>);
});
