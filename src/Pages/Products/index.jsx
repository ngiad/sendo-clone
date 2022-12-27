import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="Products">
      <div className="top">
        <label htmlFor="FilterProduct">Sắp xếp theo:</label>
        <select id="FilterProduct">
          <option value="">Đề cử</option>
          <option value="">Bán chạy</option>
          <option value="">Khuyến mãi</option>
          <option value="">Đánh giá tốt</option>
        </select>
      </div>
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
        <div class="grid-item">9</div>
      </div>
    </div>
  );
};

export default Products;
