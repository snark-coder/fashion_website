import React from "react";
import { useState } from "react";
import "./Buttons.css";



function Buttons({brands, setBrand}){
    const [heading, setHeading] = useState("fashion")

    function handleClick(key){
        setBrand({name:brands[key].name, image:brands[key].image, info:brands[key].info})
        setHeading(brands[key].name)
    }
    

    

    return(

        <div className="button-container">


        
        <h3>{heading}</h3>

        <div>
            {Object.keys(brands).map((key)=>(
                    <>
                    <button key={key} className="brand-buttons" onClick={()=>handleClick(key)}></button>
                    </>

            ))}

            

        
        
        </div>
        
        </div>
    )
}

export default Buttons;