import ToyList from '../../interfaces/ItoyList';
import renderToys from '../renderToys';

function sortToys(data: ToyList) {
  const toysRoot = document.querySelector('.toys-root')!;
  const sortInput: HTMLSelectElement = document.querySelector('.sort')!;
  const endData = data;

  sortInput.addEventListener('input', () => {
    let selectedValue = sortInput.selectedOptions[0].value;
    selectedValue = sortInput.selectedOptions[0].value;

    let newData: ToyList = endData;
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
        newData = endData.sort((a, b) => Number(a.count) - Number(b.count));
        break;
      case 'count-down':
        newData = endData.sort((a, b) => Number(b.count) - Number(a.count));
        break;
      default:
        break;
    }

    toysRoot.innerHTML = '';
    renderToys(newData, toysRoot);
  });
}

export default sortToys;
