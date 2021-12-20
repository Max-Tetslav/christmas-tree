import { IToyList } from '../../interfaces/itoyList';
import renderToys from '../renderToys';

function sortToys(data: IToyList): void {
  const toysRoot = document.querySelector('.toys-root')!;
  const sortInput: HTMLSelectElement = document.querySelector('.sort')!;
  const endData = data;

  sortInput.addEventListener('input', () => {
    let selectedValue = sortInput.selectedOptions[0].value;
    selectedValue = sortInput.selectedOptions[0].value;

    let newData: IToyList = endData;
    switch (selectedValue) {
      case 'name-up':
        newData = endData.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
        break;
      case 'name-down':
        newData = endData.sort((a, b) => {
          if (b.name > a.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
        break;
      case 'count-up':
        newData = endData.sort((a, b) => Number(a.year) - Number(b.year));
        break;
      case 'count-down':
        newData = endData.sort((a, b) => Number(b.year) - Number(a.year));
        break;
      default:
        break;
    }

    toysRoot.innerHTML = '';
    renderToys(newData, toysRoot);
  });
}

export default sortToys;
