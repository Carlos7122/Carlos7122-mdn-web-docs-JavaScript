var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
const products = ['Underpants:6.99',
                 'Socks:5.99',
                 'T-shirt:14.99',
                 'Trousers:31.99',
                 'Shoes:23.99'];

for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  const productsList = products[i];
  const productsDiv = productsList.indexOf(':');
  const productsName = productsList.slice(0, productsDiv);
  const productsPriceList = productsList.slice(productsDiv+1);
  // number 4
  const productsPrice = Number(productsPriceList);
  total = productsPrice;
  // number 5
  itemText = `${productsName}:${productsPrice}`
  console.log(itemText);

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
