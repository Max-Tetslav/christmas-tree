import Toy from '../views/components/toy';
import { IToyList } from '../interfaces/itoyList';

function renderToys(array: IToyList, target: Element): void {
  const targetUpdated: Element = target;

  if (!array.length) {
    targetUpdated.innerHTML = `
      <div class="no-toys-container">
        <h2 class="no-toys" style="color: white; margin: auto">Извините, совпадений не обнаружено</h2>
      </div>
    `;
  }

  array.map((item) => {
    const toy = new Toy(item.color, item.count, item.favorite, item.name, item.num, item.shape, item.size, item.year);

    targetUpdated.innerHTML += toy.render();

    return toy;
  });

  const toys: Element[] = [...document.querySelectorAll('.toy')!];
  const favourites: Element = document.querySelector('.favourites-text')!;
  favourites.innerHTML = JSON.parse(sessionStorage.getItem('favorites') || '[]').length
    ? JSON.parse(sessionStorage.getItem('favorites') || '[]').length
    : 0;
  let favoritesToyList: number[] = sessionStorage.getItem('favorites')
    ? JSON.parse(sessionStorage.getItem('favorites') || '[]')
    : [];
  toys.forEach((toy) => {
    if (favoritesToyList.includes(Number(toy.id.split('-')[1]) - 1)) {
      toy.classList.add('toy_favorite');
    }
    toy.addEventListener('click', () => {
      if (!favoritesToyList.includes(Number(toy.id.split('-')[1]) - 1)) {
        if (favoritesToyList.length < 20) {
          favoritesToyList.push(Number(toy.id.split('-')[1]) - 1);
        }
      } else {
        favoritesToyList = favoritesToyList.filter((item) => {
          return item !== Number(toy.id.split('-')[1]) - 1;
        });
      }
      sessionStorage.setItem('favorites', JSON.stringify(favoritesToyList));

      if (Number(favourites.innerHTML) === 20) {
        if (toy.classList.contains('toy_favorite')) {
          toy.classList.remove('toy_favorite');
          favourites.innerHTML = JSON.parse(sessionStorage.getItem('favorites') || '[]').length;
        } else {
          const closeAlert = document.querySelector('.favoritesAlert-overlay__container__btn')!;
          const overlay = document.querySelector('.favoritesAlert-overlay')!;

          overlay.classList.add('favoritesAlert-overlay_show');

          closeAlert.addEventListener('click', () => overlay.classList.remove('favoritesAlert-overlay_show'));
        }
      } else if (Number(favourites.innerHTML) < 20) {
        if (!toy.classList.contains('toy_favorite')) {
          toy.classList.add('toy_favorite');
          favourites.innerHTML = JSON.parse(sessionStorage.getItem('favorites') || '[]').length;
        } else {
          toy.classList.remove('toy_favorite');
          favourites.innerHTML = JSON.parse(sessionStorage.getItem('favorites') || '[]').length;
        }
      }
    });
  });
}

export default renderToys;
