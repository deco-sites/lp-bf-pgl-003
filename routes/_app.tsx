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

        {/* Tailwind v3 CSS file */}
        <link href={asset(`/styles.css?revision=${revision}`)} rel="stylesheet"/>

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")}/>

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
