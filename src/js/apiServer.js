import axios from 'axios';
const apiKey = '24625422-32b02834f3df76db1a58654ff';

export class apiServer {
   constructor() {
      this.serchQuery = '';
      this.page = 1;
   }
   fetch() {
      // const url = `https://pixabay.com/api/?key=${apiKey}`
        const response = axios.get(`https://pixabay.com/api/?key=${apiKey}`, {
      params: {
       q: `${this.serchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: `${this.page}`,
        per_page: 40,  
      },
        });
      // this.incrementPage();
    
   
       return response;
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
 
