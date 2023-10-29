import { keyframes, styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    paddingBottom: '4rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: '0.25rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    position: 'relative',
    width: 520,
    height: 480,
  },

  img: {
    objectFit: 'cover',
  },

  '@sm': {
    position: 'relative',
    height: 400,
  },
})

export const ProductDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    a: {
      color: '$green',
    },
  },

  h1: {
    fontSize: '$2xl',
    color: '$title',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$greenLight',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background 0.2s',

    display: 'flex',
    justifyContent: 'center',

    '&:hover': {
      backgroundColor: '$greenLight',
    },
  },

  '@sm': {
    h1: {
      fontSize: '$xl',
    },

    span: {
      fontSize: '$xl',
    },

    p: {
      fontSize: '$sm',
    },

    button: {
      fontSize: '$sm',
      padding: '1rem',
      marginTop: '5rem',
    },
  },
})

const loadingAnimation = keyframes({
  to: { transform: 'rotate(1turn)' },
})

export const Loading = styled('div', {
  border: '3px solid rgba(255, 255, 255, 0.1)',
  borderTopColor: '$white',
  height: '1.5rem',
  width: '1.5rem',
  borderRadius: '50%',

  animation: `${loadingAnimation} 1s infinite`,
})
