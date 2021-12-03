import './sass/main.scss';
import axios from 'axios';


async function getUser(name) {
  try {
    const response = await axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
      params: {
       q: `${name}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: 1,
        per_page: 40,  
      },
    });
    const resOfRespons = response.data.hits;
    console.log(resOfRespons);
   const res = resOfRespons.reduce((acc, el) => (acc += `
<div class="photo-card">
  <img src=${el.previewURL} alt=${el.tags} loading="lazy" width="250"/>
  <div class="info">
    <p class="info-item">
      <b>Likes<p>${el.likes}</p></b>
    </p>
    <p class="info-item">
      <b>Views${el.views}</b>
    </p>
    <p class="info-item">
      <b>Comments${el.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads${el.downloads}</b>
    </p>
  </div>
</div>
    `), '')
    
    gallery.innerHTML = res;
    
  } catch (error) {
    console.error(error);
  }
}



const gallery = document.querySelector('.gallery');
const form = document.getElementById('search-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();
   const getValue = e.currentTarget.elements.searchQuery.value;
   // console.log(getValue);
   form.reset();
  getUser(getValue);
  
}

// function onFechSucces(images) {
//   console.log(images)
// }


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