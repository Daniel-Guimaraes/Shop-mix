import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('section', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: '0.25rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
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

    '&:hover': {
      background: '$greenLight',
    },
  },
})
