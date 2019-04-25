import './scss/style.css';
import 'bootstrap';
import {
  booking,
  booked
} from '../src/js/booking';
import {
  contact
} from '../src/js/contact';
import {
  footerMenu
} from './js/footerMenu';
import {
  welcome
} from './js/welcome';
import {
  starters,
  mains,
  dessertes,
  drinks
} from './js/buttons';

window.onload = () => {
  document.querySelector('body').classList.add('b-ground');
  welcome();
}
document.addEventListener('click', function (e) {
  switch (e.target.textContent) {
    case 'Starters':
      starters();
      footerMenu();
      break;
    case 'Main':
      mains();
      footerMenu();
      break;
    case 'Dessertes':
      dessertes();
      footerMenu();
      break;
    case 'Drinks':
      drinks();
      footerMenu();
      break;
    case 'Contact':
      contact();
      footerMenu();
      break;
    case 'Booking':
      booking();
      footerMenu();
      break;
    case 'Book':
      booked();
      break;
  }
});