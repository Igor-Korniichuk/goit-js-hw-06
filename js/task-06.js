const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onChangeBorderColor);

function onChangeBorderColor(event) {
    
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.replace('invalid', 'valid');
        } else if (inputEl.classList.contains('valid')) {
            return;
        } else { inputEl.classList.add('valid'); }
    } else {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.replace('valid', 'invalid');
        } else if (inputEl.classList.contains('invalid')) {
            return;
        } else { inputEl.classList.add('invalid'); }
    }    
}






