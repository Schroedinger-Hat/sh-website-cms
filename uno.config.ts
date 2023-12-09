import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts(),
  ],
  shortcuts: {
    'bg-primary': 'bg-[#1a1a1a]',
    'border-base': 'border-gray:40',
  },
})
