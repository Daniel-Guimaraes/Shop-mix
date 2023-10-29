import { styled } from '..'

export const ButtonContainer = styled('button', {
  padding: '0.75rem',
  border: 0,
  cursor: 'pointer',
  borderRadius: 8,
  lineHeight: 0,

  variants: {
    background: {
      gray: {
        backgroundColor: '$elements',
      },

      green: {
        backgroundColor: '$green',
      },
    },

    colorSvg: {
      gray: {
        color: '$icon',
      },

      white: {
        color: '$white',
      },
    },
  },
})
