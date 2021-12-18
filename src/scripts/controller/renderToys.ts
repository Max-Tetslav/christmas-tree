import Toy from '../views/components/Toy';
import ToyList from '../interfaces/ItoyList';

function renderToys(array: ToyList, target: Element) {
  const targetUpdated = target;
  array.map((item) => {
    const toy = new Toy(item.color, item.count, item.favorite, item.name, item.num, item.shape, item.size, item.year);

    targetUpdated.innerHTML += toy.render();

    return toy;
  });
}

export default renderToys;
