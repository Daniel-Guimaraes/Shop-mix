import { createStitches } from '@stitches/react'

export const {
  theme,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
} = createStitches({
  theme: {
    colors: {
      background: '#121214',
      elements: '#202024',
      text: '#C4C4CC',
      title: '#E1E1E6',

      white: '#FFFFFF',

      green: '#00875F',
      greenLight: '#00B37E',
    },
  },
})