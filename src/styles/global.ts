import { globalCss } from '.'

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    'webkit-font-smoothing': 'antialiased',
    backgroundColor: '$background',
    color: '$text',
  },

  'body, button, textarea, input': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})
