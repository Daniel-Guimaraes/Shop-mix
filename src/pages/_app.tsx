import { GlobalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from '@/assets/logo.svg'

import * as S from '@/styles/pages/app'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <img src={logoImg.src} alt="" />
      </S.Header>

      <Component {...pageProps} />
    </S.Container>
  )
}
