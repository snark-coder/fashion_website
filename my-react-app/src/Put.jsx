import { useState } from "react";
import Header from "./Header";






function Put({brand, setBrand}){
    //const [image, setImage] = useState(null);

    

    function brandClicked(brand){
        setBrand(brand.images[brand.name]);
    }

    return(
        <>
        
        

       

    

    <div className="insert_image">
        <img src={brand.images[brand.name]} className="brand_image"></img>

        
        
    </div>



        

    

        </>
    );
}

export default Put;