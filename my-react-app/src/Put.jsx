import { useState } from "react";
import { motion } from "framer-motion";

function Put(){
    const [image, setImage] = useState(null);

    const images = {
        biba:"https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf9c63821/images/ss21/indietr1256ss21grn_6.jpg?sw=502&sh=753",
        and: "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw6fd8a773/images/hires/SS22/AND-F24V1172PLV_WHT-PRT%20(1)%20copy.jpg?sw=1300&sh=1950&sm=fit",
        RituKumar: "https://cdn.pixelbin.io/v2/black-bread-289bfa/original/rk_img8/410389086007_1.jpg",
        globaldesi : "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw7d3cf878/images/hires/SS22/F24M513P_NAVY%20(1).jpg?sw=1300&sh=1950&sm=fit"
    }

    function brandClicked(brand){
        setImage(images[brand]);
    }

    return(
        <>
        
        <header>
        <img className="logo" />
        <h1 className="website_name">Fashion Website</h1>
    </header>

    <div class="navbar">
        <button className="nav_button" data-name="biba" onClick={()=>brandClicked("biba")}>BIBA</button>
        <button className="nav_button" data-name="and"onClick={()=>brandClicked("and")}>AND</button>
        <button className="nav_button" data-name="RituKumar" onClick={()=>brandClicked("RituKumar")}>Ritu Kumar</button>
        <button className="nav_button" data-name="globaldesi" onClick={()=>brandClicked("globaldesi")}>Global Desi</button>

    </div>

    <div className="insert_image">
        <img src={image} className="brand_image" useMap="#workmap"></img>

        <map name="workmap">
        <area shape="rect" coords="314,390,181,143" alt="Ractangle" href="dummy.html" />
        <area shape="rect" coords="380,676,119,674" alt="Ractangle" href="dummy.html"></area>
        </map>
    </div>

        </>
    );
}

export default Put;