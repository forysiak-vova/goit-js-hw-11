import './sass/main.scss';


const form = document.getElementById('search-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();
   const getValue = e.currentTarget.elements.searchQuery.value;
   console.log(getValue);
}

// async function getFruits(name) {
//    const fruit = {
//       strawberry: '1',
//       kiwi: '2',
//       cherry:'3',
//    }
//    return Promise.resolve(fruit[name])
// }
//  getFruits().then(console.log)