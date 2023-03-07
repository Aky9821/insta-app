import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'next/document'
import  Header  from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Insta App</title>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <div>
        <Header></Header>
      </div>
    </div>

  )
}
