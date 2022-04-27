const refs = {
    inputNameEl: document.querySelector('#name-input'),
    outputNameEl: document.querySelector('#name-output'),
}

refs.inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.target.value === "") {
        refs.outputNameEl.textContent = "Anonymous";
    } else {
        refs.outputNameEl.textContent = event.target.value
    }
}