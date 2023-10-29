import { GetStaticProps } from 'next'
import Image from 'next/image'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { priceFormatter } from '@/utils/priceFormatter'

import * as S from '@/styles/pages/home'
import Link from 'next/link'
import Head from 'next/head'

import { CartActionButton } from '@/components/CartActionButton'
import { useShoppingCart } from 'use-shopping-cart'

interface HomeProps {
  products: {
    sku: string
    id: string
    name: string
    imageUrl: string
    price: number
    currency: ''
  }[]
}

interface ProductProps {
  sku: string
  id: string
  name: string
  imageUrl: string
  price: number
  currency: ''
}

export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 42,
    },

    breakpoints: {
      '(min-width: 760px)': {
        slides: {
          perView: 2,
          spacing: 42,
        },
      },
    },
  })

  function handleAddToCart(product: ProductProps) {
    if (cartDetails && cartDetails[product.id]) {
      return alert('Produto já adicionado')
    }

    addItem(product)
  }

  return (
    <>
      <Head>
        <title>Home | ShopCenter</title>
      </Head>

      <S.HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <S.Product key={product.id} className="keen-slider__slide">
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <div>
                  <Image src={product.imageUrl} alt="Camiseta 1" fill />
                </div>
              </Link>
              <S.ProductFooter>
                <div>
                  <strong>{product.name}</strong>
                  <span>{priceFormatter.format(product.price / 100)}</span>
                </div>

                <CartActionButton
                  background="green"
                  onClick={() => handleAddToCart(product)}
                  colorSvg="white"
                />
              </S.ProductFooter>
            </S.Product>
          )
        })}
      </S.HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      sku: product.id,
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 1,
  }
}
