import { styled } from '..'

export const ShoppingCartContainer = styled('aside', {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  maxWidth: 480,
  right: 0,
  zIndex: 999,
  backgroundColor: '$elements',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80);',
  padding: '4.5rem 2.62rem 2.62rem',
  transition: 'transform 0.2s linear',

  display: 'flex',
  flexDirection: 'column',
  alignContent: 'stretch',

  '&.close': {
    transform: 'translateX(100%)',
    opacity: 0,
  },

  '&.open': {
    transform: 'translateX(0%)',
    opacity: 1,
  },

  h2: {
    fontSize: '$lg',
    color: '$title',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },

  '> button:last-child': {
    marginTop: '3.43rem',
    padding: '1.15rem 2rem',
    border: 0,
    borderRadius: 8,
    background: '$green',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$greenLight',
    },
  },
})

export const ProductList = styled('div', {
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '7px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$green', // Cor da barra de rolagem
    borderRadius: '6px', // Raio da borda da barra de rolagem
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '$green', // Cor da barra de rolagem ao passar o mouse
  },
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  marginBottom: '1.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
  },

  p: {
    fontSize: '$md',
    color: '$text',
    lineHeight: 1.6,
  },

  strong: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$title',
  },

  button: {
    border: 'none',
    background: 'transparent',
    color: '$green',
    fontWeight: 'bold',
    width: 'fit-content',
    cursor: 'pointer',
    marginTop: '0.5rem',

    '&:hover': {
      color: '$greenLight',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '6.375rem',
  height: 'auto',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  position: 'relative',
})

export const Quantity = styled('div', {
  marginTop: 'auto',
  paddingTop: '1.5rem',

  display: 'flex',
  justifyContent: 'space-between',

  p: {
    color: '$title',
  },

  'p:last-child': {
    fontSize: '$md',
  },
})

export const TotalValue = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.5rem',

  p: {
    fontWeight: 'bold',
    color: '$title',
  },

  'p:first-child': {
    fontSize: '$md',
  },

  'p:last-child': {
    fontSize: '$xl',
  },
})

export const CloseButton = styled('button', {
  background: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',
  marginTop: '-1rem',

  position: 'absolute',
  top: '2.5rem',
  right: '2.5rem',
})
