import React from 'react'
import logog from "../../Images/svgexport-1.svg"
import search from "../../Images/svgexport-4.svg"
import cart from "../../Images/svgexport-5.svg"
import nav from "../../Images/svgexport-2.svg"

import "./HeaderDefauProducts.css"


const HeaderDefauProducts = () => {
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
        <form>
          <input type="text" placeholder='Tìm kiếm sản phẩm ' />
          <select>
            <option value="">Tìm trong Sendo</option>
            <option value="">Tìm trong Đầm xòe</option>
          </select>
          <button><img src={search} alt="isSearch" /></button>
        </form>
        <span><img src={cart} alt="isCart" /></span>
        <button>Đăng nhập</button>
      </div>
    </div>
  )
}

export default HeaderDefauProducts