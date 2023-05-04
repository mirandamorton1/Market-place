import Dashboard from './dashboard'
import Header from './components/Header'
import SideMenu from "./components/SideMenu"
import scss from './Home.module.scss'
import React from 'react'

const Home: React.FC = () => {

  return (
    <>

        <main className={scss.main}>
          <Header />
          <SideMenu />
          <Dashboard />
        </main>
    </>
  )
}

export default Home