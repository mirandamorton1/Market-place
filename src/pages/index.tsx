import Head from 'next/head'
import Dashboard from './dashboard'
import Header from './components/Header'
import SideMenu from "./components/SideMenu"
import scss from './Home.module.scss'
import React from 'react'

const Home: React.FC = () => {

  return (
    <>
        <Head>
          <title>Cubeseed Dashboard</title>
          <meta name="description" content="Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={scss.main}>
          <Header />
          <SideMenu />
          <Dashboard />
        </main>
    </>
  )
}

export default Home