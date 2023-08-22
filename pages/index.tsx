import { Inter } from '@next/font/google'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import MainPage from '@/components/main/MainPage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[white]'>
      <Header/>
      <MainPage />
      <Footer/>
    </div>
  )
}
