import React from 'react'
import './home.scss'
import SideBar from  "../../layouts/sideBar/SideBar"
import NavBar from '../../layouts/navBar/NavBar'
import SubHeader from '../../layouts/subHeader/SubHeader'
import Products from '../../features/products/productsView/Products'
const Home = () => {
  return (
    <>
        <div className="home">
            <SideBar/>
            <div className="home__conteiner">
                <NavBar/>
                <SubHeader/>
                <Products/>
            </div>
        </div>
    </>
  )
}

export default Home