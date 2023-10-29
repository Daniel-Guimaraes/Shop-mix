import * as S from '@/styles/componets/shoppingCart'
import Image from 'next/image'
import closeIcon from '@/assets/closeIcon.svg'
import { useShoppingCart } from 'use-shopping-cart'
import { priceFormatter } from '@/utils/priceFormatter'
import axios from 'axios'
import { useState } from 'react'
import { Loading } from '@/styles/pages/product'

interface ShoppingCartProps {
  onCloseCart: () => void
  cartAction: boolean
}

export function ShoppingCart({ cartAction, onCloseCart }: ShoppingCartProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { cartDetails, cartCount, formattedTotalPrice, removeItem } =
    useShoppingCart()

  function handleRemoveProduct(productId: string) {
    removeItem(productId)
  }

  const lineItems =
    cartDetails &&
    Object.values(cartDetails).map((item) => {
      return {
        price_data: {
          currency: 'brl',
          product_data: {
            name: item.name,
            description: item.description,
            images: [item.imageUrl],
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      }
    })

  const handleBuyButton = async () => {
    try {
      setIsLoading(true)

      const response = await axios.post('/api/checkout', {
        items: lineItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar para o checkout')
    }
  }

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

      <S.ProductList>
        {cartDetails &&
          Object.values(cartDetails).map((product) => {
            return (
              <S.Product key={product.id}>
                <S.ImageContainer>
                  <Image src={product.imageUrl} alt="" width={94} height={94} />
                </S.ImageContainer>
                <div>
                  <p>{product.name}</p>
                  <strong>{priceFormatter.format(product.price / 100)}</strong>
                  <button onClick={() => handleRemoveProduct(product.id)}>
                    Remover
                  </button>
                </div>
              </S.Product>
            )
          })}
      </S.ProductList>

      <S.Quantity>
        <p>Quantidade</p>
        <p>{cartCount} Itens</p>
      </S.Quantity>

      <S.TotalValue>
        <p>Valor total</p>
        <p>{formattedTotalPrice}</p>
      </S.TotalValue>

      <button onClick={handleBuyButton} disabled={isLoading}>
        {isLoading ? <Loading /> : 'Finalizar Compra'}
      </button>
    </S.ShoppingCartContainer>
  )
}
