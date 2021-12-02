import './sass/main.scss';
import axios from 'axios';


async function getUser(name) {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff&q=${name}&image_type=photo`);
     console.log(response.data.hits);

  } catch (error) {
    console.error(error);
  }
}




const form = document.getElementById('search-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();
   const getValue = e.currentTarget.elements.searchQuery.value;
   // console.log(getValue);
   getUser(getValue);
   form.reset();
}


// function getUser(name) {
// axios.get(`https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff&q=${name}&image_type=photo`)
//    .then(response => {
//       console.log(response.data)
      
//    }).catch(error => {
//    console.log(error)
//    })
//  }
// =================================================================
// async function getFruits(name) {
//    const fruit = {
//       strawberry: '1',
//       kiwi: '2',
//       cherry:'3',
//    }
//    return Promise.resolve(fruit[name])
// }
//  getFruits().then(console.log)