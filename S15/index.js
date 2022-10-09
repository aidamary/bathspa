let rating;

function submitForm (event) {
    event.preventDefault();
    document.getElementById('rating-message').innerHTML = rating ? `You selected ${rating} out of 5` : 'You did not select any rating';
    const form = document.getElementsByClassName('rating')[0]
    console.log(form)
    form.classList.add('hide')
    const submission = document.getElementsByClassName('submission')[0]
    submission.classList.remove('hide')
    console.log(submission);
}

function clickRatting(event) {
    event.target.parentElement.classList.add('rating__form__label--radio--selected');
}

window.addEventListener('load', () => {
    const radios = document.querySelectorAll('.rating__form__input--radio')
    for (const radio of radios) {
      radio.onclick = (e) => {
        clickRatting(e)
        rating = e.target.value;
      }
    }
})