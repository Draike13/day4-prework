let price = document.getElementById('price');
let discount = document.getElementById('discount');
let tax = document.getElementById('tax');

function finalPrice() {
  let discountPrice = price - price * discount;
  let finalPrice = discountPrice + discountPrice * tax;
  console.log(finalPrice);
}
