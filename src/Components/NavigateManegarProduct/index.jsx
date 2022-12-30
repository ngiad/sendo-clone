import React from 'react'


import "./NavigateManegerProduct.css"
import RenderNavigateProduct from './RenderNavigateProduct'

const NavigateManegerProduct = () => {
  return (
    <div style={{position: "sticky"}} className='NavigateManegerProduct'>
      <RenderNavigateProduct category={{title : "Thời trang nữ",properties : {name : "Đầm, váy",type : ["Đầm xòe"]}}}  />
    </div>
  )
}

export default NavigateManegerProduct