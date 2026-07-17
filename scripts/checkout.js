import {cart, updateCartQuantity, cartTotalProducts, updateQuantity, deleteFromCart, updateHtml, saveToLocalStorage} from '../data/cart.js'
import { products } from '../data/products.js';
import { centsToDolar } from '../utils/money.js';

let checkoutHTML = '';
cart.forEach((cartItem)=>{
  let matchingItem;
    products.forEach((product) => {
      if (product.id === cartItem.id) {
        matchingItem = product;
      }
    });
    const item = `
      <div class="cart-item-container js-cart-item-container" data-product-id = "${matchingItem.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src=${matchingItem.image}>

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingItem.name}
            </div>
            <div class="product-price">
            $${centsToDolar(matchingItem.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label-${cartItem.id}">${cartItem.qtd}</span>
              </span>
              <button class="update-button link-primary js-update-quantity" data-product-id = "${cartItem.id}">
                Update
              </button>
              <button class="delete-button link-primary js-delete-button" data-product-id = "${cartItem.id}">
                Delete
              </button>
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
    `
    checkoutHTML += item;
})

document.querySelector('.js-order-summary')
.innerHTML = checkoutHTML;  

updateCartQuantity() 



document.querySelectorAll('.js-update-quantity')
.forEach((updateButton)=>{
  updateButton.addEventListener('click', ()=>{
    updateQuantity(updateButton)
    updateCartQuantity()
    saveToLocalStorage()
  })
})

document.querySelectorAll('.js-delete-button')
.forEach((deleteButton) => {
  deleteButton.addEventListener('click', ()=>{ 
    const productId = deleteButton.dataset.productId
    cart.forEach((product)=>{
      if (product.id === productId) {
        if (product.qtd > 1) {
          product.qtd -= 1
          document.querySelector(`.quantity-label-${productId}`)
          .innerText = product.qtd
        } else {
          deleteFromCart(productId)
          updateHtml(productId)       
        }
        updateCartQuantity() 
        saveToLocalStorage()
      }
    })   
  })
})


