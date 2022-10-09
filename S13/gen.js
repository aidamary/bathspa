window.addEventListener('load', () => {
    console.log('onload')
    // 1-console log two variables
    const a = 10;
    const b = 5;
    console.log(`variable a: ${a}, variable b: ${b}`)
    const result1 = a + b;
    document.getElementById('result1').innerHTML = result1;
    const result2 = (a + b) * 5;
    document.getElementById('result2').innerHTML = result2;
    // 3- create two new string variables  and  concat them into  1 string console log
    const string1 = 'Hello';
    const string2 = 'World!';
    const result3 = string1 + ' ' + string2;
    document.getElementById('result3').innerHTML = result3;
    // 4-create an empty string variable . then assign it a new  string value. then assign it to that value plus a new value
    let text = '';
    text += 'monday';
    text += ', tuesday';
    document.getElementById('result4').innerHTML = text;
    if (1 === 1) {
        alert('It works')
    }
})

// 2-create a function that takes two parameters, adds them together and then times them by another number
function add(a, b, c) {
    return (a+b)*c;
}

// 5-create a function that will compare two variables to see if they match and alert the user  to say if they do or don’t match
function compare(a, b) {
    const message = a === b ? 'the match' : 'they do not match';
    alert('It works')
}
