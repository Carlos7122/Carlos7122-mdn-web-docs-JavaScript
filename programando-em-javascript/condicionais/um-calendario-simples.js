var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  // ADD CONDITIONAL HERE

if (choice === 'January' || choice === 'March' || choice === 'May' || choice === 'May' || choice === 'July' || choice === 'August' || choice === 'October' || choice === 'December') {
 createCalendar(31);
 h1.innerHTML = choice;
} else if (choice === 'February') {
 createCalendar(28);
 h1.innerHTML = choice;
} else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November'){
 createCalendar(30);
 h1.innerHTML = choice;
}

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}