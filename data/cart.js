export const cart = [];

export function addToCart(productId,productQuantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem
    }
  })
  
  if (matchingItem) {
    matchingItem.quantity += productQuantity
  } else {
    cart.push({
      productId : productId,
      quantity : productQuantity
    })
  } 
}