import { products } from "./products.js";
import { centsToDolar } from "../utils/money.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || []

export function addToCart(productId) {
   let matchingItem;
    cart.forEach((cartItem)=>{    
      if(productId === cartItem.id){
        matchingItem = cartItem;
      }
    })
    if(matchingItem){
      matchingItem.qtd += 1
    } else {
      cart.push(
        {
          id: productId,
          qtd: 1
        }
      )
    }
    console.log(cart); 
    
}

export function cartTotalProducts() {
  let totalProducts = 0
  cart.forEach((product)=>{
    totalProducts += 1;
  })
  return totalProducts;
}

export function updateCartQuantity() {
  let totalQuantity = 0;
    cart.forEach((item)=>{
      totalQuantity += item.qtd
    })
    document.querySelector('.js-cart-quantity')
    .innerText = totalQuantity;
}


export function updateQuantity(updateButton) {
  const cartProductId = updateButton.dataset.productId;
  cart.forEach((product)=>{
    if (product.id === cartProductId) {
      product.qtd += 1
      document.querySelector(`.quantity-label-${cartProductId}`)
      .innerText = product.qtd
    }
  }) 
}



export function deleteFromCart(productToDeleteId) {
  let newCart = []
  cart.forEach((product)=>{
    if (product.id !== productToDeleteId) {
      newCart.push(product)
    }
    
  })
  cart = newCart  
}

export function updateHtml(productToDeleteId) {
  document.querySelectorAll('.js-cart-item-container')
  .forEach((container)=>{    
    if(container.dataset.productId === productToDeleteId){
      container.remove()
    }
  })
}

export function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}
