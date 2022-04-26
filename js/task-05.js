const refs = {
    inputNameEl: document.querySelector('#name-input'),
    outputNameEl: document.querySelector('#name-output'),
}
console.log(refs.inputNameEl);
console.log(refs.outputNameEl);

refs.inputNameEl.addEventListener('input', onInputChange);

// function onInputChange(event) {
//        refs.outputNameEl.textContent = event.target.value ? event.target.value : "Anonymous";
// }

// function onInputChange(event) {
//     event.currentTarget.value !== ' ' ? refs.outputNameEl.textContent = event.currentTarget.value.trim() : refs.outputNameEl.textContent;
// }

function onInputChange(event) {
    if (event.currentTarget.value.trim() !== " ") {
        refs.outputNameEl.textContent = event.currentTarget.value.trim();
    } else {refs.outputNameEl.textContent }

}