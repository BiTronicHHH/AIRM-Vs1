import '@/styles/globals.css'
import '../styles/styles.css'
import "../styles/fonts.css"
import { initFlowbite } from 'flowbite'
import type { AppProps } from 'next/app'
import React from 'react';
export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    initFlowbite();
  }, [])
  return <Component {...pageProps} />
}
