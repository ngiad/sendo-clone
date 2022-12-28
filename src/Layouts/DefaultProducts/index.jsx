import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterLayoutProduct from '../../Components/FoodterLayoutProduct'
import HeaderDefauProducts from '../../Components/HeaderDefauProducts'
import NavigateManegerProduct from '../../Components/NavigateManegarProduct'
import NavigateProducts from '../../Components/NavigateProducts'

import "./DefaultProducts.css"



const DefaultProduct = () => {
  return (
    <div className='DefaultProduct'>
        <HeaderDefauProducts />
        <div className='Outlet-DefaultProduct'> 
            <NavigateProducts/>
            <div className='contenter'>
                <NavigateManegerProduct />
                <div className='contenter-outlet'><Outlet /></div>
            </div>
        </div> 
        <FooterLayoutProduct />
    </div>
  )
}

export default DefaultProduct