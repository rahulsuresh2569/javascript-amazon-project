export let cart = JSON.parse(localStorage.getItem('cart'))

if (!cart) {
  cart = [{
    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity : 2
  }, {
    productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1
  }];
}

function storeInLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

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
  storeInLocalStorage() 
}

export function removeFromCart(productId) {
  let newCart = []
  cart.forEach((cartItem) => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem)
    }
  })
  cart = newCart
  storeInLocalStorage()
}

export function calculateCartQuantity() {
  let cartQuantity=0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity
  })
  return cartQuantity
}

export function updateQuantity(productId, newQuantity) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity
    }
  })
  storeInLocalStorage()
}