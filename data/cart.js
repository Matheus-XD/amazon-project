export let cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    qtd: 1
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    qtd: 1
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    qtd: 5
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    qtd: 1
  }

]

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

export function updateCartQuantity() {
  let totalQuantity = 0;
    cart.forEach((item)=>{
      totalQuantity += item.qtd
    })
    return totalQuantity;
}

export function deleteButton() {
  document.querySelectorAll('.js-delete-quantity')
  .forEach((deleteButton) => {
    deleteButton.addEventListener('click', ()=>{ 
      const productToDeleteId = deleteButton.dataset.productId;
      cart.forEach((cartProduct) => {
        if (cartProduct.id === productToDeleteId) {
          
          if (cartProduct.qtd < 1) {
            cart = cart.filter((produto)=>{
              if (produto.id === productToDeleteId) {
                return false
              } else {
                return true
              }
            })
          } else {
            cartProduct.qtd -= 1
          }
          document.querySelector(`.quantity-label-${productToDeleteId}`)
          .innerText = `${cartProduct.qtd}`
        }
      });
      
    })
  })
}