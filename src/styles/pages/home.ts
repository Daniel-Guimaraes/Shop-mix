import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  position: 'relative',
  overflow: 'hidden',
  minHeight: 656,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  a: {
    div: {
      position: 'relative',
      width: 520,
      height: 480,
    },
  },

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@sm': {
    minHeight: 500,
  },
})

export const ProductFooter = styled('footer', {
  padding: '2rem',
  width: '100%',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(32, 32, 36, 0.90)',

  transition: 'all 0.2s ease-in-out',
  transform: 'translateY(100%)',
  opacity: 0,

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },

  strong: {
    fontSize: '$md',
    color: '$title',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$greenLight',
  },

  '@sm': {
    padding: '1.5rem',
    transform: 'none',
    opacity: 'initial',

    strong: {
      fontSize: '1rem',
    },

    span: {
      fontSize: '$lg',
    },
  },
})
