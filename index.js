var increament = document.querySelector('#myform .qtyplus');
var decreament = document.querySelector('#myform .qtyminus');
increament.addEventListener('click', incrementValue);
decreament.addEventListener('click', decrementValue);

function incrementValue() {
  var value = parseInt(document.getElementById('input-number').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value++;
  document.getElementById('input-number').value = value;
  productpagetotal()
}


function decrementValue() {
  var value = parseInt(document.getElementById('input-number').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value--;
  document.getElementById('input-number').value = value;
  productpagetotal()
}


function productpagetotal() {
  var sum = 0;
  var producttotal = parseFloat(document.querySelector('.span').innerText.replace('$', ''));
  var quantity = document.getElementById('input-number').value;
  sum = sum + (producttotal * quantity);
  sum = Math.round(sum * 100) / 100;
  producttotal.innerText = sum;
  console.log(sum)
}



 


