import React from "react";
import tragop from "../../Images/tragop.png";
import dealsoctrongngay from "../../Images/dealsoctrongngay.png";
import hotSale from "../../Images/hotSale.png";
import "./Products.css";

const data = [
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 250000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "TP.HCM",
    discount: 0,
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 250000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "Đồng nai",
    discount: 0,
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: false,
    price: 250000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "Hà nội",
    discount: 0,
  },

  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 250000,
    sales: 10,
    dealHot: false,
    hotSale: true,
    place: "Phú thọ",
    discount: 40,
  },

  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 250000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "Phú thọ",
    discount: 0,
  },

  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 250000,
    sales: 10,
    dealHot: true,
    hotSale: false,
    place: "Phú thọ",
    discount: 66,
  },
];

const Products = () => {
  const RendeProducts = data.map((product, index) => {
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
      <div class="grid-container">{RendeProducts}</div>
      <div className="addProduct">
        <button>Thêm sản phẩm</button>
      </div>
    </div>
  );
};

export default Products;
