import './sass/main.scss';
import Notiflix from 'notiflix';
import renderCard  from './templase/markup.hbs';
import {imageOfLightbox} from './js/lightbox.js';
import  {apiServer} from './js/apiServer.js'
// import axios from 'axios';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';


const ApiServer = new apiServer();


const gallery = document.querySelector('.gallery');
const form = document.getElementById('search-form');
const divEl = document.querySelector('.divEl');



form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  ApiServer.serchQuery = e.currentTarget.elements.searchQuery.value;
  
  if (ApiServer.serchQuery === '') {
      Notiflix.Notify.failure('please, enter text!!!')
      return;
  };


  ApiServer.resetPage();

  
  
  ApiServer.fetchAxios().then(response => {
    
    try {
      const hits = response.data.hits;
      if (hits.length === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
      }
     
      renderCardMarkup(hits);
      
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Error, something went wrong');
    }

  });


  form.reset()
  clearPage();
}

function clearPage() {
  gallery.innerHTML = '';
}

function renderCardMarkup(response) {
  gallery.insertAdjacentHTML('beforeend', renderCard(response));
  imageOfLightbox();
}


const onEntry = entries => {
     
    entries.forEach(entry => {
        if (entry.isIntersecting && ApiServer.serchQuery !== '') {
          ApiServer.fetchAxios().then(response => {
            const hits = response.data.hits
            renderCardMarkup(hits);
            
          })
        }
    });
}
const options = {
    rootMargin: '200px'
}


const observer = new IntersectionObserver(onEntry, options)

observer.observe(divEl)




// async function getUser(name, page = 1) {
//   try {
//     const response = await axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
//       params: {
//        q: `${name}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: `${page}`,
//         per_page: 40,  
//       },
//     });
//   console.log(response);
//     const resOfRespons = response.data.hits;
//   console.log(resOfRespons);

    
//      if (resOfRespons.length === 0) {
//         Notiflix.Notify.failure('Oops, there is no country with that name')
//      }
//    const res = resOfRespons.reduce((acc, el) => (acc += `
// <div class="photo-card">
// <a href="${el.largeImageURL}">
//   <img src=${el.webformatURL} alt=${el.tags} loading="lazy" width="250" height = "180" class = "image"/>
//   </a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes ${el.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views ${el.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments ${el.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads ${el.downloads}</b>
//     </p>
//   </div>
// </div>

//     `), '')
    
//     gallery.innerHTML = res;
 
//   } catch (error) {
//     Notiflix.Notify.failure('Oops, there is no country with that name')
//   }
//   imageOfLightbox();



  
// }


// const gallery = document.querySelector('.gallery');
// const form = document.getElementById('search-form');
// const divEl = document.querySelector('.divEl');



// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//    e.preventDefault();
//   const getValue = e.currentTarget.elements.searchQuery.value;
//   form.reset();
//   getUser(getValue);
// }






//    window.addEventListener('scroll', () => {
//   const documentRect = document.documentElement.getBoundingClientRect();
//   console.log('top', documentRect.top);
//      console.log('bottom', documentRect.bottom);
//      if (documentRect.bottom < document.documentElement.clientHeight + 150) {
//         page++;
//         console.log('PAGE:',page++)
      
//      }
//  })
  


// function imageOfLightbox() {
//     const lightbox = new SimpleLightbox(".gallery a", {
//   captionSelector: "img", 
//   captionsData: "alt", 
//   captionPosition: "bottom", 
//   captionDelay: 250, 
//   showCounter: false, 
//   scrollZoom: false, 
// });
// }



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
// ================================================= скрол =================================

// const onEntry = entries => {
    
//     entries.forEach(entry => {
//         if (entry.isIntersecting && photoApiService.query !== '') {
//             photoApiService.fetchPhoto().then(renderCardMarkup)
//         }
//     });
// }
// const options = {
//     rootMargin: '200px'
// }


// const observer = new IntersectionObserver(onEntry, options)

// observer.observe(refs.divEl)


// async function getUser(name, page = 1) {
  
//     const response = await axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
//       params: {
//        q: `${name}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: `${page}`,
//         per_page: 40,  
//       },
//     });
//   console.log(response);
//     const resOfRespons = response.data.hits;
//   console.log(resOfRespons);
   
    
//      if (resOfRespons.length === 0) {
//         Notiflix.Notify.failure('Oops, there is no country with that name')
//      }
//      return resOfRespons;
// };


   
// async function renderImage(img) {
   
//   try {
//     const data = await getUser({img});
//     console.log('data',data)
    
    
//         gallery.innerHTML = res;
     
//   } catch (error) {
//     console.log(error);
//   }
  
//  imageOfLightbox();
// }



// function onFormSubmit(e) {
//    e.preventDefault();
//   const getValue = e.currentTarget.elements.searchQuery.value;
//   form.reset();
//   page = 1;
   
//   getUser(getValue);
 
  
// }
// =======================================================================================================================

