import React from 'react'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
// import Resume from './components/Resume'
import Skills from './components/Skills'

const Home = () => {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <Aboutme />
        <Skills />
        {/* <Resume /> */}
        <Portfolio />
        <Contact />
    </React.Fragment>
  )
}

export default Home