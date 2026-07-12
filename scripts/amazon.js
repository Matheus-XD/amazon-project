import {products} from '../data/products.js'
import {cart, addToCart, updateCartQuantity, deleteButton} from '../data/cart.js'

document.querySelector('.js-cart-quantity')
    .innerText = `${updateCartQuantity()}`

let bodyHtml = '';
products.forEach((element) => {
    const ProductHtml = `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${element.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${element.name}
          </div>

          <div class="product-rating-container">
            <img class = "product-rating-stars"
              src = "images/ratings/${element.rating.stars}"
            >
            <div class="product-rating-count link-primary">
              ${element.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(element.priceCents/100).toFixed(2)}
          </div>

          <div>
            <select class="product-quantity-container-${element.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
           data-product-name = "${element.name}" data-product-id = "${element.id}">
            Add to Cart
          </button>
        </div>
    `
    bodyHtml += ProductHtml
})

let gridHtml = document.querySelector('.js-products-grid');
gridHtml.innerHTML = bodyHtml 

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  const productId = button.dataset.productId; 
  button.addEventListener('click', ()=>{
    addToCart(productId)
    document.querySelector('.js-cart-quantity')
    .innerText = `${updateCartQuantity()}` 
  })
})




