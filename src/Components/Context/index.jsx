import React, { createContext, useMemo, useState } from "react";

export const ProductsContext = createContext();
const query = {
  place: ["TP.HCM", "Đồng nai", "Hà nội", "Phú thọ"],
  max: "",
  min: "",
  dealHot: "",
  hotSale: "",
  search: "",
};

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
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "zzz",
    trademark: "OEM",
    Dealsforyou: true,
    price: 250000,
    sales: 10,
    dealHot: true,
    hotSale: false,
    place: "Phú thọ",
    discount: 66,
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 190000,
    sales: 10,
    dealHot: true,
    hotSale: false,
    place: "Hà nội",
    discount: 66,
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 390000,
    sales: 10,
    dealHot: true,
    hotSale: false,
    place: "Hà nội",
    discount: 66,
    material : "Cát",
    else : "Hàng không bán"
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 690000,
    sales: 10,
    dealHot: true,
    hotSale: false,
    place: "Hà nội",
    discount: 66,
    material : "Khác",
    else : "Chết không mua"
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: false,
    price: 180000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "Hà nội",
    discount: 0,
    material : "Tuyết-mưa",
    else : "Có video"
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: false,
    price: 180000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "Hà nội",
    discount: 0,
    material : "Chiffon",
    else : "Có video"
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: false,
    price: 180000,
    sales: 10,
    dealHot: false,
    hotSale: false,
    place: "Hà nội",
    discount: 0,
    material : "Lưới",
    else : "Để cho vui"
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: true,
    price: 180000,
    sales: 10,
    dealHot: false,
    hotSale: true,
    place: "Hà nội",
    discount: 0,
    material : "Lưới",
    else : "Để cho vui"
  },
  {
    image:
      "https://media3.scdn.vn/img4/2022/02_12/PHQiaxArQRmpBT7IZKmn_simg_de2fe0_250x250_maxb.jpg",
    name: "quần bò cao cấp .chất vải mền mịn. co giản nhẹ. đi chơi mặc nhà đều sang - 33_72123642",
    trademark: "OEM",
    Dealsforyou: false,
    price: 180000,
    sales: 10,
    dealHot: true,
    hotSale: false,
    place: "Hà nội",
    discount: 15,
    material : "Lưới",
    else : "Để cho vui"
  },
];

const checkProductFilter = (product, Arrquery) => {
  let found = false;
  Arrquery.forEach((element) => {
    if (element === product) {
      found = true;
    }
  });

  return found;
};

const checkProductFilterEvent = (product, Arrquery) => {
  let found = false;
  Arrquery.forEach((element) => {
    if (product[element]) {
      found = true;
    }
  });

  return found;
};


const Context = ({ children }) => {
  const [Query, setQuery] = useState(query);
  const [InputFilter, setInputFilter] = useState({
    place: [],
    min: 0,
    max: 0,
    event: [],
    material: [],
    else: [],
    search: "",
    select : "",
  });

  const RenderProducts = useMemo(() => {
    let output = [];
    if (
      !InputFilter.place.length ||
      !InputFilter.max ||
      !InputFilter.min ||
      !InputFilter.event.length ||
      !InputFilter.material.length ||
      !InputFilter.else.length ||
      !InputFilter.search
    ) {
      output = data;
    }

    if (InputFilter.place.length) {
      output = data.filter((item) =>
        checkProductFilter(item.place, InputFilter.place)
      );
    } else {
      output = data;
    }

    if(InputFilter.select === "hight"){
      output = [...output].sort((a,b) => {
        return  b.price - a.price
      })
    }

    if(InputFilter.select === "low"){
      output = [...output].sort((a,b) => {
        return  a.price - b.price
      })
    }

    if(InputFilter.select === "default"){
      output = data
    }

    if (InputFilter.search) {
      output = output.filter((item) => item.name.includes(InputFilter.search));
    }


    if (InputFilter.max && InputFilter.min) {
      output = output.filter((item) =>
        item.discount === 0
          ? InputFilter.min < item.price < InputFilter.max
          : InputFilter.min <
            (item.price * item.discount) / 100 <
            InputFilter.max
      );
    }

    if (InputFilter.max) {
      output = output.filter((item) =>
        item.discount === 0
          ? item.price < InputFilter.max
          : (item.price * item.discount) / 100 < InputFilter.max
      );
    }

    if (InputFilter.min) {
      output = output.filter((item) =>
        item.discount === 0
          ? item.price > InputFilter.min
          : (item.price * item.discount) / 100 > InputFilter.min
      );
    }

    if (InputFilter.event.length) {
      output = output.filter((item) =>
      checkProductFilterEvent(item, InputFilter.event)
      );
    }

    if (InputFilter.material.length) {
      output = output.filter((item) =>
        checkProductFilter(item.material, InputFilter.material)
      );
    }

    if (InputFilter.else.length) {
      output = output.filter((item) =>
        checkProductFilter(item.else, InputFilter.else)
      );
    }

    return output;
  }, [InputFilter]);
 


  const context = {
    Query,
    setQuery,
    RenderProducts,
    setInputFilter,
    countProduct : RenderProducts.length,
    InputFilter
  };

  return <ProductsContext.Provider value={context}>{children}</ProductsContext.Provider>;
};

export default Context;
