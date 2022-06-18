const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener('load', () => {
    localStorage.setItem('taxRate', taxRate);
    localStorage.setItem('shippingPrice', shippingPrice);

//     sessionStorage.setItem('taxRate', taxRate);
//     sessionStorage.setItem('shippingPrice', shippingPrice);
});
 
//*capturing method

let productsDiv = document.querySelector('.products');
productsDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('minus')) {
        if (event.target.nextElementSibling.innerText > 0) {
            event.target.nextElementSibling.innerText--; 
            calculateProductAndCartTotal();
        } else {
            if (confirm("Product will be deleted?")) {
                event.target.parentElement.parentElement.parentElement.remove();
                calculateCartTotal();
                
            }
        }
        
        
    } else if (event.target.classList.contains('plus')) {
        event.target.previousElementSibling.innerText++;
        calculateProductAndCartTotal();

    }else if (event.target.classList.contains('remove-product')) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
            
    } 

});

const calculateProductAndCartTotal = () => {
     
}


