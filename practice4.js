let price;
let discount;
let tax;

function setNumbers() {
  price = document.getElementById('price').value;
  discount = document.getElementById('discount').value;
  tax = document.getElementById('tax').value;
}

function finalPrice() {
  let discountPrice = price - price * discount;
  let finalPrice = discountPrice + discountPrice * tax;
  console.log(finalPrice);
}
