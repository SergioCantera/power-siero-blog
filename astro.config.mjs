import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), robotsTxt()],
  env: {
    schema: {
      PUBLIC_COSMIC_BUCKET_SLUG: envField.string({context:'server',access:'secret'}),
      PUBLIC_COSMIC_READ_KEY: envField.string({context:'server',access:'secret'})
    },
  },
  site: 'https://power-siero-blog.vercel.app'
})
