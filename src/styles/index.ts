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
  media: {
    sm: '(max-width: 760px)',
    lg: '(min-width: 1024px)',
  },

  theme: {
    colors: {
      background: '#121214',
      elements: '#202024',
      text: '#C4C4CC',
      title: '#E1E1E6',
      icon: '#8D8D99',

      white: '#FFFFFF',

      green: '#00875F',
      greenLight: '#00B37E',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
