import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
export default imageOfLightbox();