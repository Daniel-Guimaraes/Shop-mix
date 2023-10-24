import * as S from '@/styles/pages/product'

export default function ProductDetails() {
  return (
    <S.ProductContainer>
      <S.ImageContainer></S.ImageContainer>

      <S.ProductDetails>
        <h1>Produto X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A enim,
          numquam deleniti, obcaecati laborum nam illum quisquam quibusdam eum
          aspernatur dolore sit excepturi, modi voluptates tempore. Cum unde
          eaque porro.
        </p>

        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  )
}
