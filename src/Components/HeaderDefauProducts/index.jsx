import React, { useContext, useState } from 'react'
import logog from "../../Images/svgexport-1.svg"
import searchr from "../../Images/svgexport-4.svg"
import cart from "../../Images/svgexport-5.svg"
import nav from "../../Images/svgexport-2.svg"

import "./HeaderDefauProducts.css"
import { ProductsContext } from '../Context'


const HeaderDefauProducts = () => {
  const {InputFilter,setInputFilter} = useContext(ProductsContext)

  const [search,setSearch] = useState("")

  const handleChaneSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()

    setInputFilter({...InputFilter,search : search})
  }

 
  return (
    <div className='HeaderDefauProducts'>
      <div className="top">
        <ul>
          <li>Tải ứng dụng</li>
          <li>Chăm sóc khách hàng</li>
          <li>Kiểm tra đơn hàng</li>
        </ul>
      </div>
      <div className="bottom">
        <img src={logog} alt="isLogoSendo" className="logo" />
        <img id='icon-nav' src={nav} alt="nav-header" />
        <form onSubmit={submitSearch}>
          <input type="text" value={search} onChange={handleChaneSearch} placeholder='Tìm kiếm sản phẩm ' />
          <select>
            <option value="">Tìm trong Sendo</option>
            <option value="">Tìm trong Đầm xòe</option>
          </select>
          <button><img src={searchr} alt="isSearch" /></button>
        </form>
        <span><img src={cart} alt="isCart" /></span>
        <button>Đăng nhập</button>
      </div>
    </div>
  )
}

export default HeaderDefauProducts