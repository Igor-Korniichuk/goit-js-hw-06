const formEl = document.querySelector('form.login-form');
const inputEmailEl = document.querySelector('input[type="email"]');
const inputPusswordEl = document.querySelector('input[type="password"]');

formEl.addEventListener('submit', onHendlerForm);

function onHendlerForm(event) {
    event.preventDefault();    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formElementsItems = {
        email,
        password,
    };
    
    if (email === '' || password === '') {
        window.alert("Все поля должны быть заполнены!");
    }
    console.log(formElementsItems);
    formEl.reset();
}
