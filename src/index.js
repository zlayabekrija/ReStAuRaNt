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
      break;
    case 'Main':
      mains();
      break;
    case 'Dessertes':
      dessertes();
      break;
    case 'Drinks':
      drinks();
      break;
    case 'Contact':
      contact();
      break;
    case 'Booking':
      booking();
      break;
    case 'Book':
      booked();
      break;
  }
  footerMenu();
});