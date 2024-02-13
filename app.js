const search = () => {
    const input = document.querySelector("#search-item").value.toUpperCase();
    const storeItems=document.querySelector("#product-lists")
    const product=document.querySelectorAll(".product");

    for(let i=0;i<product.length;i++){
        let textvalue=product[i].getElementsByTagName("h2")[0];
        // if(textvalue.toUpperCase.indexOf(input)<0){
        //     // product[i].style.display="none"
        //     console.log(textvalue.indexOf(input))
        // }

        if(textvalue){
            let match=textvalue.textContent || textvalue.innerHTML;
            if(match.toUpperCase().indexOf(input)>-1){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";
            }
            
        }


    }

    
}









