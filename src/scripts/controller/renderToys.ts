import Toy from '../views/components/toy';
import { IToyList } from '../interfaces/itoyList';

function renderToys(array: IToyList, target: Element): void {
  const targetUpdated: Element = target;
  array.map((item) => {
    const toy = new Toy(item.color, item.count, item.favorite, item.name, item.num, item.shape, item.size, item.year);

    targetUpdated.innerHTML += toy.render();

    return toy;
  });

  const toys: Element[] = [...document.querySelectorAll('.toy')!];
  const favourites: Element = document.querySelector('.favourites-text')!;

  toys.forEach((toy) => {
    toy.addEventListener('click', () => {
      if (Number(favourites.innerHTML) === 20) {
        if (toy.classList.contains('toy_favorite')) {
          toy.classList.remove('toy_favorite');
          favourites.innerHTML = String(Number(favourites.innerHTML) - 1);
        } else {
          alert('Извините, все слоты заполнены');
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
