import { globalCss } from '.'

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    'webkit-font-smoothing': 'antialiased',
    backgroundColor: '$background',
    color: '$text',

    '@sm': {
      paddingInline: '0.8rem',
    },
  },

  'body, button, textarea, input': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})
