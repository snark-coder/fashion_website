
import React from "react";

import {motion} from "framer-motion";


function Header(){
    return(




<motion.div
  animate={{
    scale: 2,
    transition: { duration: 2 }
  }}
>

<h1 className="website_name">Fashion Website</h1>

</motion.div>


    )
}

export default Header;