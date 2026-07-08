export const cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    qtd: 2
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    qtd: 3
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    qtd: 5
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
    document.querySelector('.js-cart-quantity')
      .innerText = totalQuantity

}