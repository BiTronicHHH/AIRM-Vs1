import React from 'react'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import Sell from '@/components/sell/Sell'

export default function price() {
  return (
    <div className='bg-[white] font-body'>
        <Header />
        <Sell />
        <Footer />
    </div>
  )
}
