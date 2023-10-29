import { styled } from '..'

export const ButtonContainer = styled('button', {
  padding: '0.75rem',
  border: 0,
  cursor: 'pointer',
  borderRadius: 8,
  lineHeight: 0,
  position: 'relative',

  div: {
    position: 'absolute',
    width: '1.5rem',
    height: '1.5rem',
    top: '-7px',
    right: '-7px',
    background: '$green',
    color: '$white',
    borderRadius: 999,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

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
