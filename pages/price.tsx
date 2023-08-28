import React from 'react'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import Price from '@/components/price/Price'
export default function price() {
  return (
    <div className='bg-[white] font-body'>
        <Header />
        <Price />
        <Footer />
    </div>
  )
}
