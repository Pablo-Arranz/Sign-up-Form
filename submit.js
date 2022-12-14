const form = document.querySelector('form');
const pwdError = document.querySelector('#pass1 + span.error');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
let result

form.addEventListener('submit', (event) =>{
    if (result === 'Not matching') {
        pwdError.textContent = '*Passwords do not match';
        pass1.classList.add('noMatch');
        pass2.classList.add('noMatch');
        event.preventDefault();
    } else {
        pwdError.textContent = '';
        pass1.classList.remove('noMatch');
        pass2.classList.remove('noMatch');
        event.default;
    }
})

function checkPassword() {
    result = pass1.value == pass2.value ? 'Matching' : 'Not matching';
}

pass1.addEventListener('keyup', () => {
    if (pass2.legnth != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);