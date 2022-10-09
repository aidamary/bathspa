window.addEventListener('load', () => {
    console.log('onload')
    const a = 10;
    const b = 5;
    const result1 = a + b;
    document.getElementById('result1').innerHTML = result1;
    const result2 = (a + b) * 5;
    document.getElementById('result2').innerHTML = result2;
    const string1 = 'Hello';
    const string2 = 'World!';
    const result3 = string1 + ' ' + string2;
    document.getElementById('result3').innerHTML = result3;
    let text = '';
    text += 'monday';
    text += ', tuesday';
    document.getElementById('result4').innerHTML = text;
    if (1 === 1) {
        alert('It works')
    }
})
