import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'

import { GlobalStyles } from '@/styles/global'
import * as S from '@/styles/pages/app'
import { CartActionButton } from '@/components/CartActionButton'
import { useState } from 'react'
import { ShoppingCart } from '@/components/ShoppingCart'
import { CartProvider } from 'use-shopping-cart'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartAction = () => {
    setIsCartOpen(!isCartOpen)
  }

  const stripePublicKey = process.env.STRIPE_PUBLIC_KEY || ''

  return (
    <S.Container>
      <CartProvider
        cartMode="checkout-session"
        stripe={stripePublicKey}
        currency="BRL"
        shouldPersist
      >
        <S.Header>
          <Image src={logoImg} alt="logo" width={130} height={52} />

          <CartActionButton
            onClick={handleCartAction}
            background="gray"
            colorSvg="gray"
            count
          />
        </S.Header>

        <ShoppingCart cartAction={isCartOpen} onCloseCart={handleCartAction} />

        <Component {...pageProps} />
      </CartProvider>
    </S.Container>
  )
}
