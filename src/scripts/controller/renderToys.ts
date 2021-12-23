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
  let favoritesToyList: number[] = sessionStorage.getItem('favorites')
    ? sessionStorage
        .getItem('favorites')!
        .split('')
        .map((item) => Number(item))
    : [];
  toys.forEach((toy) => {
    toy.addEventListener('click', () => {
      if (!favoritesToyList.includes(Number(toy.id.split('-')[1]))) {
        favoritesToyList.push(Number(toy.id.split('-')[1]));
      } else {
        favoritesToyList = favoritesToyList.filter((item) => {
          return item !== Number(toy.id.split('-')[1]);
        });
      }
      sessionStorage.setItem('favorites', favoritesToyList.join(''));
      console.log(favoritesToyList);
      if (Number(favourites.innerHTML) === 20) {
        if (toy.classList.contains('toy_favorite')) {
          toy.classList.remove('toy_favorite');
          favourites.innerHTML = String(Number(favourites.innerHTML) - 1);
        } else {
          const closeAlert = document.querySelector('.favoritesAlert-overlay__container__btn')!;
          const overlay = document.querySelector('.favoritesAlert-overlay')!;

          overlay.classList.add('favoritesAlert-overlay_show');

          closeAlert.addEventListener('click', () => overlay.classList.remove('favoritesAlert-overlay_show'));
        }
      } else if (Number(favourites.innerHTML) < 20) {
        if (!toy.classList.contains('toy_favorite')) {
          toy.classList.add('toy_favorite');
          favourites.innerHTML = String(Number(favourites.innerHTML) + 1);
        } else {
          toy.classList.remove('toy_favorite');
          favourites.innerHTML = String(Number(favourites.innerHTML) - 1);
        }
      }
    });
  });
}

export default renderToys;
