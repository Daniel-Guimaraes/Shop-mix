import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'

import { GlobalStyles } from '@/styles/global'
import * as S from '@/styles/pages/app'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image
          src={logoImg}
          alt="logo"
          width={logoImg.width}
          height={logoImg.height}
        />
      </S.Header>

      <Component {...pageProps} />
    </S.Container>
  )
}
