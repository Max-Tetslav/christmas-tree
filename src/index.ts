import Router from './scripts/controller/router';
import Data from './scripts/controller/loader';
import './style.scss';

window.addEventListener('hashchange', Router);
window.addEventListener('load', Router);

Data.getData('./assets/data.json');
