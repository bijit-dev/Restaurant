import React from 'react'
import Navber from '../Layouts/Navber'
import Banner from '../Layouts/Banner'
import About from '../Layouts/About'
import FoodItems from '../Layouts/FoodItems'
import BookTable from '../Layouts/BookTable'
import Footer from '../Layouts/Footer'
import CustomersSay from '../Layouts/CustomersSay'

const Home = () => {
    return (
        <div className='bg-ContactBg bg-cover bg-no-repeat bg-fixed'>
            {/* navber part */}
            <Navber />

            {/* Banner part */}
            <Banner />

            {/* About */}
            <About />

            {/* popular products */}
            <FoodItems />

            {/* Book table */}
            <BookTable />

            {/*Customers Say  */}
            <CustomersSay />
            
            {/* Footer */}
            <Footer />     
        </div>
    )
}

export default Home