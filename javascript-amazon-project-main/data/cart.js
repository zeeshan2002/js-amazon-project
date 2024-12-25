export const cart = [];

export function addToCart(productId){      
    let val = 0;
    val = document.querySelector(`.js-quantity-selector-${productId}`).value;
    val = Number(val);
    let matchingItem;
    cart.forEach((item) => {
        if(productId===item.productId){
            matchingItem = item;
          }
    });
    if(matchingItem){
        matchingItem.quantity += val;
        
    }else{
        cart.push({
            productId : productId,
            quantity : val
        });
    }
}

export function cartQuantity(){
    let cartQuantity = 0;
    cart.forEach((item) => {
    cartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}