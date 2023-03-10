import React, { useContext, useState } from "react";
import svgexport_3 from "../../Images/svgexport-3.svg";
import svgexport_6 from "../../Images/svgexport-6.svg";
import { ProductsContext } from "../Context";

const NavigateInMaegerProduct = () => {
  const { Query,InputFilter,setInputFilter } = useContext(ProductsContext);

  const [Open, setOpen] = useState({
    place: true,
    Price: true,
    event: true,
    material : true,
    else : true,
  });

  const handchangeInputNumber = (e) => {
    if(isNaN(e.target.value)) return 

    setInputFilter({...InputFilter,[e.target.id] : e.target.value})
  }

  const handleChangeCheckbox = (e) => {
    if(InputFilter[e.target.name].filter(item => item === e.target.value).length) {
      return setInputFilter({...InputFilter,[e.target.name] : [...InputFilter[e.target.name].filter(item => item !== e.target.value)]})
    }

    setInputFilter({...InputFilter,[e.target.name] : [...InputFilter[e.target.name],e.target.value]})
  }


  

  return (
    <div className="NavigateInMaegerProduct">
      <div className="address">
        <h4>
          <span>Địa chỉ</span>
          <button onClick={() => setOpen({ ...Open, place: !Open.place })}>
            <img
              src={Open.place ? svgexport_6 : svgexport_3}
              alt="svgexport_3"
            />
          </button>
        </h4>
        {Open.place &&
          Query.place.map((item, index) => {
            return (
              <div className="checkbox" key={index}>
                <input type="checkbox" onChange={handleChangeCheckbox} name="place" id={item} value={item} />
                <label htmlFor={item}>
                  {item === "TP.HCM" ? "TP. Hồ chí minh" : item}
                </label>
              </div>
            );
          })}
      </div>
      <div className="valueRange">
        <h4>
          <span>Khoảng giá</span>
          <button onClick={() => setOpen({ ...Open, Price: !Open.Price })}>
            <img
              src={Open.Price ? svgexport_6 : svgexport_3}
              alt="svgexport_3"
            />
          </button>
        </h4>
        {Open.Price && (
          <div>
            <div className="left">
              <label htmlFor="min">Thấp nhất</label>
              <input onChange={handchangeInputNumber} value={InputFilter.min} type="text" name="min" id="min" />
            </div>
            <div className="right">
              <label htmlFor="max">Cao nhất</label>
              <input onChange={handchangeInputNumber} value={InputFilter.max} type="text" name="max" id="max" />
            </div>
          </div>
        )}
      </div>
      <div className="event">
        <h4>
          <span>Ưu đãi</span>
          <button onClick={() => setOpen({ ...Open, event: !Open.event })}>
            <img
              src={Open.event ? svgexport_6 : svgexport_3}
              alt="svgexport_3"
            />
          </button>
        </h4>
        {Open.event && (
          <div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} value={"dealHot"} name="event" type="checkbox" id="dealHot" />
              <label htmlFor={"dealHot"}>Deal sốc</label>
            </div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} value={"hotSale"} name="event" type="checkbox" id="hotSale" />
              <label htmlFor={"hotSale"}>Flash Sale</label>
            </div>
          </div>
        )}
      </div>

      <div className="material">
        <h4>
          <span>Chất liệu</span>
          <button onClick={() => setOpen({ ...Open, material: !Open.material })}>
            <img
              src={Open.material ? svgexport_6 : svgexport_3}
              alt="svgexport_3"
            />
          </button>
        </h4>
        {Open.material && (
          <div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} name="material" value={"Tuyết-mưa"} type="checkbox" id="Tuyết-mưa" />
              <label htmlFor={"Tuyết-mưa"}>Tuyết mưa</label>
            </div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} name="material" value={"Kate"} type="checkbox" id="Kate" />
              <label htmlFor={"Kate"}>Kate</label>
            </div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} name="material" value={"Cát"} type="checkbox" id="Cát" />
              <label htmlFor={"Cát"}>Cát</label>
            </div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} name="material" value={"Lưới"} type="checkbox" id="Lưới" />
              <label htmlFor={"Lưới"}>Lưới</label>
            </div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} name="material" value={"Chiffon"}  type="checkbox" id="Chiffon" />
              <label htmlFor={"Chiffon"}>Chiffon</label>
            </div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} name="material" value={"Khác"}  type="checkbox" id="Khác" />
              <label htmlFor={"Khác"}>Khác</label>
            </div>
          </div>
        )}
      </div>
      <div className="else">
        <h4>
          <span>Bộ lọc khác</span>
          <button onClick={() => setOpen({ ...Open, else: !Open.else })}>
            <img
              src={Open.else ? svgexport_6 : svgexport_3}
              alt="svgexport_3"
            />
          </button>
        </h4>
        {Open.else && (
          <div>
            <div className="checkbox">
              <input onChange={handleChangeCheckbox} id="Có-video"  type="checkbox" name="else" value="Có video"  />
              <label htmlFor={"Có-video"}>Có video</label>
            </div>
            <div className="checkbox">
              <input id="Hàng-không-bán" onChange={handleChangeCheckbox} name="else" value="Hàng không bán"  type="checkbox" />
              <label htmlFor={"Hàng-không-bán"}>Hàng không bán</label>
            </div>
            <div className="checkbox">
              <input name="else" id="Chết-không-mua" onChange={handleChangeCheckbox} value="Chết không mua"  type="checkbox" />
              <label htmlFor={"Chết-không-mua"}>Chết không mua</label>
            </div>
            <div className="checkbox">
              <input name="else" id="Để-cho-vui" onChange={handleChangeCheckbox} value="Để cho vui"  type="checkbox"  />
              <label htmlFor={"Để-cho-vui"}>Để cho vui</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(NavigateInMaegerProduct);
