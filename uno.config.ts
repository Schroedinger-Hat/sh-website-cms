import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: 'Fira Code',
      },
    }),
  ],
  shortcuts: {
    'bg-primary': 'bg-[#1a1a1a]',
    'border-base': 'border-gray:40',
  },
  transformers: [
    transformerDirectives(),
  ],
})
