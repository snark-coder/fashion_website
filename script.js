function put_image(){
    images = {
        biba:"https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf9c63821/images/ss21/indietr1256ss21grn_6.jpg?sw=502&sh=753",
        and: "https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw6fd8a773/images/hires/SS22/AND-F24V1172PLV_WHT-PRT%20(1)%20copy.jpg?sw=1300&sh=1950&sm=fit",
        RituKumar: "https://cdn.pixelbin.io/v2/black-bread-289bfa/original/rk_img8/410389086007_1.jpg",
        globaldesi : "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw7d3cf878/images/hires/SS22/F24M513P_NAVY%20(1).jpg?sw=1300&sh=1950&sm=fit"
    }

    let brand = document.getElementsByClassName("nav_button");
    let image_space = document.getElementsByClassName("insert_image")[0];

    Array.from(brand).forEach(brand_name => {
        brand_name.addEventListener("click", ()=>change_image(image_space, brand_name));

    });

}

function change_image(image_space, brand_name){
            image_space.innerHTML = ""
            let brand_name_in = brand_name.getAttribute("data-name");
                let biba_image = document.createElement("img");
                biba_image.src=images[brand_name_in];
                biba_image.style.width = "400px";
                biba_image.style.marginTop = "20px";
                biba_image.style.borderRadius = "20px";
                biba_image.style.boxShadow = "10px 10px 5px black";
                image_space.appendChild(biba_image);
            
}