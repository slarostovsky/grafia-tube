/* eslint-disable */
window.addEventListener('load', () => {
    const formEmail = document.querySelector('.form__email');
    const btnSubmit = document.querySelector('.form__submit');
    const errorEmpty = document.querySelector('.error__empty');
    const errorNoValid = document.querySelector('.error__no-valid');
    let isValidEmail = false;

    formEmail.onkeydown = function () {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (regex.test(formEmail.value)) {
            isValidEmail = true;
            errorNoValid.style.display = 'none'
        } else {
            isValidEmail = false;
        }
    }

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        if (formEmail.value.trim()) {
            if (isValidEmail) {
                console.log('isValidEmail', isValidEmail)
                isValidEmail = false;
                errorEmpty.style.display = 'none'
            } else {
                errorNoValid.style.display = 'block'
            }
        } else {
            errorNoValid.style.display = 'none'
            errorEmpty.style.display = 'block'
        }
    })

    async function formSend() {
        let res = await fetch('sendmail.php', {
            method: 'POST',
            body: formEmail.value
        });
        if (res.ok) {
            let result = await res.json();
            console.log('result', result)
        } else {
            console.error('Не отправлено')
        }
    }
});
