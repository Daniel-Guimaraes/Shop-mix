import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import tShirt1 from '@/assets/shirts/1.svg'
import tShirt2 from '@/assets/shirts/2.svg'
import tShirt3 from '@/assets/shirts/3.svg'
import tShirt4 from '@/assets/shirts/4.svg'

import * as S from '@/styles/pages/home'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount && price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
