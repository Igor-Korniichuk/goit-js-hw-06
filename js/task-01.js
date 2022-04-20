const NumberOfCategories = document.querySelectorAll('.item');
console.log("Number of categories:", NumberOfCategories.length);


for (const NumberOfCategorie of NumberOfCategories) {
    
    const nameCategory = NumberOfCategorie.querySelector('h2');
    const ElementsCategory = NumberOfCategorie.querySelectorAll('li');    
    console.log('Category:', nameCategory.textContent);    
    console.log('Elements:', ElementsCategory.length);
    
}