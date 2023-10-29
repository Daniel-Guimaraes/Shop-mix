import * as S from '@/styles/componets/cartActionButton'
import { Bag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

interface CartActionButtonProps {
  onClick: () => void
  background: 'gray' | 'green'
  colorSvg: 'gray' | 'white'
  count?: boolean
}

export function CartActionButton({
  count,
  colorSvg,
  background,
  onClick,
}: CartActionButtonProps) {
  const { cartCount } = useShoppingCart()

  const totalCount = cartCount && cartCount > 0

  return (
    <S.ButtonContainer
      onClick={onClick}
      background={background}
      colorSvg={colorSvg}
    >
      {count && totalCount ? <div>{cartCount}</div> : null}

      <Bag size={24} />
    </S.ButtonContainer>
  )
}
