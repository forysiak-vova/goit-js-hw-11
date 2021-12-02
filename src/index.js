import './sass/main.scss';
import axios from 'axios';

 axios.get('https://pixabay.com/api/?key=24625422-24625422-32b02834f3df76db1a58654ff&q=yellow+flowers&image_type=photo');


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