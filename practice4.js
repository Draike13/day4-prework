let price;
let discount;
let tax;

function setNumbers() {
  price = document.getElementById('price').value;
  discount = document.getElementById('discount').value;
  tax = document.getElementById('tax').value;
  document.getElementById('form').reset();
}

function finalPrice() {
  let discountPrice = price - price * discount;
  let finalPrice = discountPrice + discountPrice * tax;
  let result = finalPrice.toFixed(2);
  alert(`The final price is ${result}!`);
}
