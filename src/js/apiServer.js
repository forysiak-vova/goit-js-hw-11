import axios from 'axios';


export class apiServer {
   constructor() {
      this.serchQuery = '';
      this.page = 1;
   }
   fetch() {
     
        return axios.get('https://pixabay.com/api/?key=24625422-32b02834f3df76db1a58654ff', {
      params: {
       q: `${this.serchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: `${this.page}`,
        per_page: 40,  
      },
        });
   }

   incrementPage() {
      this.page += 1;
   }

    resetPage() {
      this.page = 1;
   }

   get query() {
      return this.serchQuery;
   }

   set query(newQuery) {
      this.serchQuery = newQuery;
   }

}
 
