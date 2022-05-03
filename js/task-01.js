const numberOfCategories = document.querySelectorAll('.item');
console.log("Number of categories:", numberOfCategories.length);


numberOfCategories.forEach(numberOfCategorie => {
    
    const nameCategory = numberOfCategorie.querySelector('h2');
    const elementsCategory = numberOfCategorie.querySelectorAll('li');    
    console.log('Category:', nameCategory.textContent);    
    console.log('Elements:', elementsCategory.length);
    
})