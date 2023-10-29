import bagIcon from '@/assets/icon.svg'
import Image from 'next/image'
import * as S from '@/styles/componets/cartActionButton'

interface CartActionButtonProps {
  onClick: () => void
  background: 'gray' | 'green'
  colorSvg: 'gray' | 'white'
}

export function CartActionButton({
  colorSvg,
  background,
  onClick,
}: CartActionButtonProps) {
  return (
    <S.ButtonContainer
      onClick={onClick}
      colorSvg={colorSvg}
      background={background}
    >
      <Image
        src={bagIcon}
        width={24}
        height={24}
        alt="ícone do botão de carrinho"
      />
    </S.ButtonContainer>
  )
}
