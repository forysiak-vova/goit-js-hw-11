import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function imageOfLightbox() {
    const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img", 
  captionsData: "alt", 
  captionPosition: "bottom", 
  captionDelay: 250, 
  showCounter: false, 
  scrollZoom: false, 
    });
   return lightbox;
}
