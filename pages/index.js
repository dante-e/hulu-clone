import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/KyP3gRQ/download.png" />
      </Head>

      <Header />
      <Nav />
      <Results />
    </div>
  )
}
