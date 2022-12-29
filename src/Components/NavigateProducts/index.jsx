import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductsContext } from '../Context'

import "./NavigateProduct.css"

const NavigateProducts = () => {
  const { countProduct } = useContext(ProductsContext)
  return (
    <div className='NavigateProducts'>
      <div className='top'>
        <ol>
          <li className={"link"}>
            <NavLink >Sendo.vn</NavLink>
          </li>
          <li className={"link"}>
            <NavLink >Thời trang nữ</NavLink>
          </li>
          <li className={"link"}>
            <NavLink>Váy đầm</NavLink>
          </li>
          <li>
            <NavLink id={"last"}>Đầm xòe</NavLink>
          </li>
        </ol>
      </div>
      <div className='bottom'><strong>Đầm xòe</strong> Tìm thấy hơn {new Intl.NumberFormat(['ban', 'id']).format(countProduct)} sản phẩm </div>
    </div>
  )
}

export default NavigateProducts