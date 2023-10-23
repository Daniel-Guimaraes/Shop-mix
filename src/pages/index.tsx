import Image from 'next/image'

import tShirt1 from '@/assets/shirts/1.svg'
import tShirt2 from '@/assets/shirts/2.svg'
import tShirt3 from '@/assets/shirts/3.svg'
import tShirt4 from '@/assets/shirts/4.svg'

import * as S from '@/styles/pages/home'

export default function Home() {
  return (
    <S.HomeContainer>
      <section>
        <S.Product href="#">
          <Image src={tShirt1} alt="Camiseta 1" width={520} height={480} />
          <S.ProductFooter>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </S.ProductFooter>
        </S.Product>
      </section>

      <section>
        <S.Product href="#">
          <Image src={tShirt2} alt="Camiseta 2" width={520} height={480} />
          <S.ProductFooter>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </S.ProductFooter>
        </S.Product>
      </section>

      <section>
        <S.Product href="#">
          <Image src={tShirt3} alt="Camiseta 3" width={520} height={480} />
          <S.ProductFooter>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </S.ProductFooter>
        </S.Product>
      </section>

      <section>
        <S.Product href="#">
          <Image src={tShirt4} alt="Camiseta 4" width={520} height={480} />
          <S.ProductFooter>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </S.ProductFooter>
        </S.Product>
      </section>
    </S.HomeContainer>
  )
}
