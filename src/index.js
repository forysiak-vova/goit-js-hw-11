import './sass/main.scss';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

let page = 1;

async function getUser(name) {
  // try {
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
   try { 
  
   const res = resOfRespons.reduce((acc, el) => (acc += `
<div class="photo-card">
<a href="${el.largeImageURL}">
  <img src=${el.webformatURL} alt=${el.tags} loading="lazy" width="250" height = "180" class = "image"/>
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${el.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${el.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${el.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${el.downloads}</b>
    </p>
  </div>
</div>

    `), '')
    
    gallery.innerHTML = res;
 
  } catch (error) {
    Notiflix.Notify.failure('Oops, there is no country with that name')
  }
  imageOfLightbox();
}


const gallery = document.querySelector('.gallery');
const form = document.getElementById('search-form');
// const btn = document.querySelector('.load-more');
// console.log(btn)

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();
  const getValue = e.currentTarget.elements.searchQuery.value;
  form.reset();
  
  getUser(getValue);
  
}

window.addEventListener('scroll', () => {
  const documentRect = document.documentElement.getBoundingClientRect();
  console.log('top', documentRect.top);
  console.log('bottom', documentRect.bottom);
  page++;
})

function imageOfLightbox() {
    const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img", 
  captionsData: "alt", 
  captionPosition: "bottom", 
  captionDelay: 250, 
  showCounter: false, 
  scrollZoom: false, 
});
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

