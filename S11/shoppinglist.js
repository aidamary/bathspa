function addItem(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target))
   const {value1} = data;
   const existingItems = Array.prototype.slice.call( document.getElementsByTagName('li')).map(_ => _.innerHTML)
   console.log(existingItems)
   let message;
   if (existingItems.map(_ => _.toLowerCase()).includes(value1.toLowerCase())) {
        message = 'Item already on the list!';
   } else {
    const newItem = document.createElement('li');
    const textnode = document.createTextNode(value1);
    newItem.appendChild(textnode);
    document.getElementById('shopping-list').appendChild(newItem)
    message = 'Item successfully added to the list!'
   }
    const modalItem = document.getElementById('liveToast');
    document.getElementById('toast-body').innerHTML = message
    new bootstrap.Toast(modalItem).show();
}
