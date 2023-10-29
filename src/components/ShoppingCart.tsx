import * as S from '@/styles/componets/shoppingCart'
import Image from 'next/image'
import closeIcon from '@/assets/closeIcon.svg'

interface ShoppingCartProps {
  onCloseCart: () => void
  cartAction: boolean
}

export function ShoppingCart({ cartAction, onCloseCart }: ShoppingCartProps) {
  return (
    <S.ShoppingCartContainer className={cartAction ? 'open' : 'close'}>
      <S.CloseButton onClick={onCloseCart}>
        <Image
          src={closeIcon}
          alt="ícone de fechar o carrinho"
          width={24}
          height={24}
        />
      </S.CloseButton>

      <h2>Sacola de compras</h2>

      <S.Product>
        <S.ImageContainer></S.ImageContainer>

        <div>
          <p>Camiseta X</p>
          <strong>R$ 79,90</strong>
          <button>Remover</button>
        </div>
      </S.Product>

      <S.Quantity>
        <p>Quantidade</p>
        <p>3 Itens</p>
      </S.Quantity>

      <S.TotalValue>
        <p>Valor total</p>
        <p>R$ 270,00</p>
      </S.TotalValue>

      <button>Finalizar compra</button>
    </S.ShoppingCartContainer>
  )
}
