import React from "react";
import nhieuhangtot from "../../Images/nhieuhangtot.png";
import sieutienloi from "../../Images/sieutienloi.png";
import tiepkiem from "../../Images/tiepkiem.png";
import yentam from "../../Images/yentam.png";
import bocongthuong from "../../Images/bocongthuong.png";
import dadangki from "../../Images/dadangki.png";

const FooterLayoutProduct = () => {
  const hotList =
    "Đồng HồSHOPPING MallThế Giới Di ĐộngBánh Trung Thu Kinh ĐôBlack FridayTiviMỹ phẩm hàn quốcKem chống nắngChợ TốtShopeeCorona VirusĐồ chơi nấu ănLaptopiPhone 6Bàn phím cơQuạt"
      .split(" ")
      .map((item, index) => {
        return (
          <span className="hotSeo" key={index}>
            {item}
          </span>
        );
      });
  return (
    <div className="FooterLayoutProduct">
      <div className="top">
        <div className="contener">
          <div className="content">
            <img src={nhieuhangtot} alt="Isnhieuhangtot" />
            <p>Siêu nhiều hàng tốt</p>
            <span>Cái gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
          </div>
          <div className="content">
            <img src={tiepkiem} alt="Isnhieuhangtot" />
            <p>Siêu yên tâm</p>
            <span>Cái gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
          </div>
          <div className="content">
            <img src={sieutienloi} alt="Isnhieuhangtot" />
            <p>Siêu tiện lợi</p>
            <span>Cái gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
          </div>
          <div className="content">
            <img src={yentam} alt="Isnhieuhangtot" />
            <p>Siêu tiếp kiệp</p>
            <span>Cái gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="content">
          <p>VỀ CHÚNG TÔI</p>
          <ul>
            <li>Giới thiệu sendo.vn</li>
            <li>Giới thiệu senMail</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật</li>
            <li>Giao hàng và nhận hàng</li>
          </ul>
        </div>
        <div className="content">
          <p>VỀ CHÚNG TÔI</p>
          <ul>
            <li>Giới thiệu sendo.vn</li>
            <li>Giới thiệu senMail</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật</li>
            <li>Giao hàng và nhận hàng</li>
          </ul>
        </div>
        <div className="content">
          <p>VỀ CHÚNG TÔI</p>
          <ul>
            <li>Giới thiệu sendo.vn</li>
            <li>Giới thiệu senMail</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật</li>
            <li>Giao hàng và nhận hàng</li>
          </ul>
        </div>
        <div className="content">
          <p>VỀ CHÚNG TÔI</p>
          <ul>
            <li>Giới thiệu sendo.vn</li>
            <li>Giới thiệu senMail</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật</li>
            <li>Giao hàng và nhận hàng</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="contener">
          <div className="left">
            <p>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</p>
            <ul>
              <li>
                Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ
                20, ngày 26/04/2022.
              </li>
              <li>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</li>
              <li>
                Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01,
                Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông,
                Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
              </li>
              <li>Email: lienhe@sendo.vn</li>
              <li>
                <img src={dadangki} alt="dadangki" className="bo-cong-thuong" />{" "}
                <img
                  src={bocongthuong}
                  alt="bocongthuong"
                  className="bo-cong-thuong"
                />
              </li>
            </ul>
          </div>
          <div className="right">
            <form>
              <label htmlFor="">
                Đăng ký nhận bản tin ưu đãi khủng từ Sendo
              </label>
              <div>
                <input type="text" placeholder="Email của bạn là " />
                <button>Đăng kí</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="end">
        <p>Top tìm kiếm</p>
        {hotList}
      </div>
    </div>
  );
};

export default FooterLayoutProduct;
