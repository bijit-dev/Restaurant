import React from 'react'
import Navber from './Layouts/Navber'
import Banner from './Layouts/Banner'
import About from './Layouts/About'
import FoodItems from './Layouts/FoodItems'
import Contact from './Layouts/Contact'
import Footer from './Layouts/Footer'
import Blog from './Layouts/Blog'

const App = () => {
  return (
    <>
      <Navber/>
      <Banner />
      <About />
      <FoodItems />
      <Contact />
      <Blog />
      <Footer />      
    </>
  )
}

export default App
