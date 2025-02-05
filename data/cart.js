export const cart = [];

export function addToCart(productId) {
  const quantityElement = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantityElement.value);

  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}