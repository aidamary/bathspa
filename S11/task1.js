function calculate (event) {
    event.preventDefault()
   const data = Object.fromEntries(new FormData(event.target))
   const {value1, value2, calculation} = data;
   console.log(value1, value2, calculation);
   const parsedValue1 = parseInt(value1);
   const parsedValue2 = parseInt(value2);
   console.log(typeof value1, typeof parsedValue1)

   if (!value1 || !value2 || !calculation) {
    alert('All fields are mandatory!')
    return;
   }
   let result;
   switch (calculation) {
        case 'add':
            result = parsedValue1 + parsedValue2
            break;
        case 'subtract':
            result = parsedValue1 - parsedValue2
            break;
        case 'multiply':
            result = parsedValue1 * parsedValue2
            break;

        }
    const node = document.createElement("div")
    const textNode = document.createTextNode(result);
    node.appendChild(textNode)
    document.getElementById('results').appendChild(node)
}
