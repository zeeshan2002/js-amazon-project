export let cart = [{
    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity : 3
}, {
    productId : "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity : 2
}];

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

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((item) => {
        if(item.productId != productId){
            newCart.push(item);
        }
    });
    cart = newCart;

}