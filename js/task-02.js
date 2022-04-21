const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsAll = [];
// for (const ingredient of ingredients) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.classList.add('item');
//   ingredientEl.textContent = ingredient;
//   ingredientsAll.push(ingredientEl);  
// }

// const ingredientsUl = document.querySelector('#ingredients');
// ingredientsUl.append(...ingredientsAll);

const ingredientsAll = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
        ingredientEl.classList.add('item');
        ingredientEl.textContent = ingredient;
        return ingredientEl;
})
        const ingredientsUl = document.querySelector('#ingredients');
        ingredientsUl.append(...ingredientsAll);