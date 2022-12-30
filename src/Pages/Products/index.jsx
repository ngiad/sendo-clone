import React, { useContext } from "react";
import tragop from "../../Images/tragop.png";
import dealsoctrongngay from "../../Images/dealsoctrongngay.png";
import hotSale from "../../Images/hotSale.png";
import { ProductsContext } from "../../Components/Context"
import "./Products.css";



const Products = () => {
  const { RenderProducts,setInputFilter,InputFilter } = useContext(ProductsContext)
  const Products = RenderProducts.map((product, index) => {
    if (product.hotSale) {
      return (
        <div key={index} className="hotSale grid-item">
          <div className="top">
            <img src={hotSale} alt="dealsoctrongngay" />
          </div>
          <div className="center">
            <img src={product.image} alt="imageProduct" />
            <p style={{ color: "red", fontWeight: "600" }}>
              {new Intl.NumberFormat(["ban", "id"]).format(
                (product.price / 100) * product.discount
              ) + "đ"}
            </p>
            <p style={{fontSize : "10px"}}>
              <span style={{textDecoration : "line-through"}}>{new Intl.NumberFormat(["ban", "id"]).format(product.price) + "đ"}</span> 
              <span style={{color : "red",textDecoration : "none",marginLeft :"4px"}}>-{product.discount}%</span>
            </p>
          </div>
          <div className="bottom">
            <div className="sales">mở bán</div>
          </div>
        </div>
      );
    } else if (product.dealHot) {
      return (
        <div key={index} className="dealHot grid-item">
          <div className="top">
            <img src={dealsoctrongngay} alt="dealsoctrongngay" />
          </div>
          <div className="center">
            <img src={product.image} alt="imageProduct" />
            <p style={{ color: "red", fontWeight: "600" }}>
              {new Intl.NumberFormat(["ban", "id"]).format(
                (product.price / 100) * product.discount
              ) + "đ"}
            </p>
            <p style={{fontSize : "10px"}}>
              <span style={{textDecoration : "line-through"}}> {new Intl.NumberFormat(["ban", "id"]).format(product.price) + "đ"}</span>
              <span style={{color : "red",textDecoration : "none",marginLeft :"4px"}}>-{product.discount}%</span>
            </p>
          </div>
          <div className="bottom">
            <div className="sales">mở bán</div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="default grid-item">
          <div className="top">
            <img src={product.image} alt="imageProduct" />
            <p>{product.name}</p>
          </div>
          <div className="center">
            <p style={{ color: "red", fontWeight: "600" }}>
              {new Intl.NumberFormat(["ban", "id"]).format(product.price) + "đ"}
            </p>
            {product.Dealsforyou && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "10px",
                  color: "#007aff",
                  backgroundColor: "rgb(241, 243, 249)",
                  width: "90px",
                  textAlign: "center",
                  borderRadius: "4px",
                }}
              >
                <img style={{ width: "10px" }} src={tragop} alt="tragop" />{" "}
                <span>Trả góp Kredivo</span>
              </div>
            )}
          </div>
          <div className="bottom default-bottom">{product.place}</div>
        </div>
      );
    }
  });

  const handleChangeSelct = (e) => {
    setInputFilter({...InputFilter, select : e.target.value})
  }


  return (
    <div className="Products">
      <div className="top">
        <label htmlFor="FilterProduct">Sắp xếp theo:</label>
        <select onChange={handleChangeSelct} id="FilterProduct">
          <option value="default">Đề cử</option>
          <option value="hight">Giá từ cao tới thấp</option>
          <option value="low">Giá từ thấp tới cao</option>
        </select>
      </div>
      <div class="grid-container">{Products}</div>
      <div className="addProduct">
        <button>Thêm sản phẩm</button>
      </div>
    </div>
  );
};

export default Products;
