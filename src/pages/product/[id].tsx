import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { priceFormatter } from '@/utils/priceFormatter'

import * as S from '@/styles/pages/product'
import Head from 'next/head'
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
  product: {
    sku: string
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    defaultPriceId: string
    currency: 'BRL'
  }
}

interface ProductInCartProps {
  sku: string
  id: string
  name: string
  price: number
  imageUrl: string
  currency: 'BRL'
}

export default function ProductDetails({ product }: ProductProps) {
  const { addItem, cartDetails } = useShoppingCart()

  function handleAddToCart(product: ProductInCartProps) {
    if (cartDetails && cartDetails[product.id]) {
      return alert('Produto já adicionado')
    }

    addItem(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | ShopCenter</title>
      </Head>

      <S.ProductContainer>
        <S.ImageContainer>
          <div>
            <Image
              src={product.imageUrl}
              fill
              alt="Imagem ilustrativa de uma camiseta"
            />
          </div>
        </S.ImageContainer>

        <S.ProductDetails>
          <div>
            <h1>{product.name}</h1>
            <Link href={'/'}>Voltar</Link>
          </div>

          <span>{priceFormatter.format(product.price / 100)}</span>

          <p>{product.description}</p>

          <button onClick={() => handleAddToCart(product)}>
            Adicionar no carrinho
          </button>
        </S.ProductDetails>
      </S.ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = await String(params?.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: price.unit_amount,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1hour
  }
}
