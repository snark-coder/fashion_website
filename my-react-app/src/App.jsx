
import './App.css'
import Put from "./Put";
import Buttons from "./Buttons";

import { useState } from 'react';

const brands = {
  biba:{
    name:'BIBA',
    image:"https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf9c63821/images/ss21/indietr1256ss21grn_6.jpg?sw=502&sh=753",
    info:"lorem epsum"
  },
 ritu:{
    name:'RITU KUMAR',
    image:"https://cdn.pixelbin.io/v2/black-bread-289bfa/original/rk_img8/410389086007_1.jpg",
     
    info:"lorem epsum"
  },
  global:{
    name:'GLOBAL DESI',
    image:"https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw7d3cf878/images/hires/SS22/F24M513P_NAVY%20(1).jpg?sw=1300&sh=1950&sm=fit",
    info:"lorem epsum"
  },
  and:{
    name:'AND',
    image:"https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw6fd8a773/images/hires/SS22/AND-F24V1172PLV_WHT-PRT%20(1)%20copy.jpg?sw=1300&sh=1950&sm=fit",
    info:"lorem epsum"
  }
}




function App() {

  const [brand, setBrand] = useState(null);
  

  return (
    <>


      
    <Buttons 
    
    brands={brands}
    setBrand = {setBrand}/>
    

    


       
    </>
  )
}

export default App
