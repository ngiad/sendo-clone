import React, { useState } from "react";
import svgexport_3 from "../../Images/svgexport-3.svg";
import svgexport_6 from "../../Images/svgexport-6.svg";
import NavigateInMaegerProduct from "./NavigateInMaegerProduct";

const RenderNavigateProduct = ({ category }) => {
  const [Open, setOpen] = useState({
    category: true,
    properties: false,
  });


  return (
    <div className="RenderNavigateProduct">
      <div className="category">
        <h4>
          <span>Danh mục</span>
          <button
            onClick={() => setOpen({ ...Open, category: !Open.category })}
          >
            <img
              src={Open.category ? svgexport_6 : svgexport_3}
              alt="svgexport_3"
            />
          </button>
        </h4>
        {Open.category && (
          <div className="category_properties">
            <p>Về trang tất cả danh mục</p>
            <ul>
              <li>
                <div className="top">
                  <button
                    onClick={() =>
                      setOpen({ ...Open, properties: !Open.properties })
                    }
                  >
                    <img
                      src={Open.properties ? svgexport_6 : svgexport_3}
                      alt="svgexport_3"
                    />
                  </button>
                  {category.title}
                </div>
                {Open.properties && (
                  <div className="bottom">
                    <ul>
                      <li>
                        <div className="top">
                          <button
                          >
                            <img
                              src={svgexport_3}
                              alt="svgexport_3"
                            />
                          </button>
                          Đầm xòe
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
      <NavigateInMaegerProduct />
    </div>
  );
};

export default React.memo(RenderNavigateProduct);
