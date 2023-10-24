import { stripe } from '@/lib/stripe'
import * as S from '@/styles/pages/product'
import { priceFormatter } from '@/utils/priceFormatter'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    price: string
    imageUrl: string
  }
}

export default function ProductDetails({ product }: ProductProps) {
  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt="Imagem ilustrativa de uma camiseta"
        />
      </S.ImageContainer>

      <S.ProductDetails>
        <div>
          <h1>{product.name}</h1>
          <Link href={'/'}>Voltar</Link>
        </div>

        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
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
        price:
          price.unit_amount && priceFormatter.format(price.unit_amount / 100),
      },
    },
    revalidate: 60 * 60 * 1, // 1hour
  }
}
