import { cart, cartQuantity, removeFromCart } from '../data/cart.js';
import { product } from '../data/products.js';

let cartHtml = '';
cart.forEach((cartitem) => {
    const productId = cartitem.productId;

    let matchingItem;
    product.forEach((prod) => {
        if(prod.id === productId){
            matchingItem = prod;
        }
    });
    
    cartHtml += `
        <div class="cart-item-container 
        js-cart-item-${productId}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingItem.name}
                </div>
                <div class="product-price">
                  ${(matchingItem.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartitem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-product-id="${matchingItem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;

});
document.querySelector('.js-order-summary').innerHTML = cartHtml;
document.querySelectorAll('.js-delete')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      
      removeFromCart(productId);
      const container = document.querySelector(`.js-cart-item-${productId}`);
      container.remove();
      checkoutCartQuantity();
    });
  });

// document.querySelector('.checkout-cart').innerHTML = 
checkoutCartQuantity();
function checkoutCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((item) => {
  cartQuantity += item.quantity;
  });
  // return cartQuantity;
  document.querySelector('.checkout-cart')
  .innerHTML = cartQuantity;
}