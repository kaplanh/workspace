const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  //set item to localStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  //set item to sessionStorage
  // oturum kapatildiginda burdaki veriler kaybolur
  // özel veriler varsa burda tutulabilir
    
    
  //add after func. coding
  calculateCartTotal();
});

//*-----capturing vs. bubbling------
//! tüm elementlere ulasabilecegim en yakin parenti secmeliyiz fazladan kaynak tüketmemek icin
// !en huzlisi getElementById ikinci hizli querySelector dür
let productsDiv = document.querySelector(".products");//console.log() icine yazmadan da document.querySelector('.products') bu ifadeyi console tasiyip yakalayip yakalayamadigimizi kontrol edebiliriz
productsDiv.addEventListener("click", (e) => {
    //!console.log(event.target); event.target evente maruz kalan elementi temsil eder

    // !dedelerine)  tanimladigim bir click event ayni genetige sahip bütün cocuk ve torunlarda ayni event hender fonksiyonuna yani click event ine sahip oldular

    //minus buttons
    // neye tikladigimi ayristirmaliyim
    //!if(e.target.className=='minus')) bu sekildede yazilabilir 

    // ! tikladigim elementin classname'i minus olana tikladigimda 
    
    if (e.target.classList.contains("minus")) {
        //tikladigim torunlardan hangisinin class 'i minus demek üstteki ifade

        // console.log("minusBtn clicked");
        if (e.target.nextElementSibling.innerText > 1) { //bir sonraki kardesin texti
               // e.target.parentElement.lastElementChild.innerText;
            e.target.nextElementSibling.innerText--;
            //+,-,*, / string ifadeyi number a cevirir islem yapilir output string olarak cikar
            //calculate Product and Cart Total
            //passing selectedProductInfo as parameter 
            calculateProductAndCartTotal(e.target.parentElement.parentElement);//hem product hemde cart total i hesaplamaliyiz
        }
        else {
            if (confirm("Product will be removed!")) {
                e.target.parentElement.parentElement.parentElement.remove();//closest(product) da diyebilirdik product parent e ulasmak icin
                //calculateCartTotal
                calculateCartTotal();
            }
        }
    }

    //plus buttons
    else if (e.target.className == "plus") {
        // console.log("plusBtn clicked");
        // e.target.parentElement.firstElementChild.innerText;
        e.target.previousElementSibling.innerText++;//bir önceki kardesinin texti
        //calculate Product and Cart Total
        calculateProductAndCartTotal(e.target.parentElement.parentElement);
    }

    //remove buttons
    else if (e.target.className == "remove-product") {
        // console.log("removeBtn clicked");
        if (confirm("Product will be removed")) {
            e.target.parentElement.parentElement.parentElement.remove();
                    //calculateCartTotal
            calculateCartTotal()
        }

    }
    //other elements
    else {
        console.log("other elements clicked");
    }
})

const calculateProductAndCartTotal = (productInfoDiv) => {
    console.log(productInfoDiv);
    let productQuantity = productInfoDiv.querySelector("#product-quantity").innerText;
    let productPrice = productInfoDiv.querySelector("strong").innerText;
    let productTotalPriceDiv = productInfoDiv.querySelector(".product-line-price");
    productTotalPriceDiv.innerText = (productQuantity * productPrice).toFixed(2);

    calculateCartTotal();
}

const calculateCartTotal = () => {
    let productTotalPriceDivs = document.querySelectorAll(".product-line-price");
    // console.log(productTotalPriceDivs);
    let subtotal = 0;
    productTotalPriceDivs.forEach(eachProductTotalPriceDiv => {
        subtotal += parseFloat(eachProductTotalPriceDiv.innerText)
    });
    console.log(subtotal);
    let taxPrice = subtotal * localStorage.getItem("taxRate");
    console.log(taxPrice);
    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0);
    console.log(shipping);
    let cartTotal = subtotal + taxPrice + shipping;
    console.log(cartTotal);

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
}
