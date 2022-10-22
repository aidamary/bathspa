const justNUmbers = /^[0-9]*$/;
const noNumbers = /^([^0-9]*)$/;
const cardNumber = /[0-9\s]{13,19}/;

function submitForm(event) {
  event.preventDefault();
  let error = false;
  const data = new FormData(event.target);
  console.log('form submitted', [...data.entries()]);
  [...data.entries()].forEach(entry => {
    if (!entry[1]) {
      console.log(entry);
      document.getElementById(`${entry[0]}-error-message`).innerHTML = 'Can\'t be blank';
      error = true;
    } else {
      document.getElementById(`${entry[0]}-error-message`).innerHTML = '';

    }
    if (error) {
      return;
    }
    switch (entry[0]) {
      case 'cname':
        if (!noNumbers.test(entry[1])) {
          document.getElementById(`${entry[0]}-error-message`).innerHTML = 'Invalid format';
          error = true;
        } else {
          document.getElementById(`${entry[0]}-error-message`).innerHTML = '';
        }
        break;
      case 'cnumber':
        console.log(entry[1], cardNumber.test(entry[1]));
        if (!cardNumber.test(entry[1])) {
          document.getElementById(`${entry[0]}-error-message`).innerHTML = 'Invalid format';
          error = true;
        }
        break;
      case 'exp-m':
        const monthNum = parseInt(entry[1]);
        if (!monthNum || monthNum > 12 || monthNum < 1) {
          document.getElementById(`${entry[0]}-error-message`).innerHTML = 'Invalid month';
          error = true;
        }
        break;
      case 'exp-y':
        const yearNum = parseInt(entry[1]);
        if (!yearNum || yearNum < 0) {
          document.getElementById(`${entry[0]}-error-message`).innerHTML = 'Invalid year';
          error = true;
        }
        break;
      case 'cvc':
        if (!justNUmbers.test(entry[1]) || entry[1].length !== 3) {
          document.getElementById(`${entry[0]}-error-message`).innerHTML = 'Invalid format';
          error = true;
        }
        break;
      default:

      if (error) {
        return;
      } else {

      }
    }
  });

  if (error) {
    return;
  } else {
    // hide form and show result page
    document.getElementById('checkout').classList.add('hidden');
    document.getElementById('completed').classList.remove('hidden');
  }
}

function resetForm() {
  document.getElementById('checkout').classList.remove('hidden');
  document.getElementById('completed').classList.add('hidden');
}