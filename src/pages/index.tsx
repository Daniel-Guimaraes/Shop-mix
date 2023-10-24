import { GetStaticProps } from 'next'
import Image from 'next/image'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { priceFormatter } from '@/utils/priceFormatter'

import * as S from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
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

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <section key={product.id} className="keen-slider__slide">
            <S.Product href="#">
              <Image
                src={product.imageUrl}
                alt="Camiseta 1"
                width={520}
                height={480}
              />
              <S.ProductFooter>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </S.ProductFooter>
            </S.Product>
          </section>
        )
      })}
    </S.HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price:
        price.unit_amount && priceFormatter.format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 10,
  }
}
