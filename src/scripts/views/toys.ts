import { target } from 'nouislider';
import Data from '../controller/loader';
import renderToys from '../controller/renderToys';
import { IToyList } from '../interfaces/itoyList';
import IFilter from '../interfaces/ifilter';
import createSlider from './components/uiSlider';
import toysView from './components/toysView';
import filterData from '../controller/filter/filterToys';
import sortToys from '../controller/filter/sort';

const Toys = {
  render: async (): Promise<string> => {
    const view: string = `${toysView}`;

    return view;
  },
  afterRender: async (): Promise<void> => {
    const yearsRange: target = document.querySelector('#year-range')! as target;
    const countRange: target = document.querySelector('#count-range')! as target;

    createSlider(yearsRange, 1940, 2021, 10);
    createSlider(countRange, 1, 12, 1);

    const data: IToyList = await Data.getData('./assets/data.json');
    let endData: IToyList = data;
    const toysRoot: HTMLElement = document.querySelector('.toys-root')! as HTMLElement;

    const toySizeSvg: HTMLElement[] = [...document.querySelectorAll('.size-svg')!] as HTMLElement[];
    const toyShapeSvg: HTMLElement[] = [...document.querySelectorAll('.shape-svg')!] as HTMLElement[];
    const toySizeInputs: HTMLElement[] = [...document.querySelectorAll('.size-toggle')!] as HTMLElement[];
    const toyShapeInputs: HTMLElement[] = [...document.querySelectorAll('.shape-toggle')!] as HTMLElement[];

    toySizeInputs.map((item, index) =>
      item.addEventListener('click', () => {
        toySizeSvg[index].classList.toggle('size-svg_selected');
      }),
    );
    toyShapeInputs.map((item, index) =>
      item.addEventListener('click', () => {
        toyShapeSvg[index].classList.toggle('size-svg_selected');
      }),
    );

    sortToys(endData);

    const defaultFilters: IFilter = {
      name: null,
      favorite: null,
      shape: {},
      size: {},
      color: {},
      countRange: null,
      yearRange: null,
    };

    const filterOptions: IFilter = defaultFilters;

    const filterFavourite: HTMLElement = document.querySelector('.favorite')! as HTMLElement;

    filterFavourite.addEventListener('input', () => {
      filterOptions.favorite = filterOptions.favorite ? true : null;

      endData = filterData(filterOptions, data);
      toysRoot.innerHTML = '';
      renderToys(endData, toysRoot);
    });

    const filterShape: HTMLElement[] = [...document.querySelectorAll('.shape-toggle')!] as HTMLElement[];

    filterShape.forEach((elem) => {
      elem.addEventListener('input', () => {
        filterOptions.shape[elem.id] = !filterOptions.shape[elem.id] ? true : null;

        endData = filterData(filterOptions, data);
        toysRoot.innerHTML = '';
        renderToys(endData, toysRoot);
      });
    });

    const filterSize: HTMLElement[] = [...document.querySelectorAll('.size-toggle')!] as HTMLElement[];

    filterSize.forEach((elem) => {
      elem.addEventListener('input', () => {
        filterOptions.size[elem.id] = !filterOptions.size[elem.id] ? true : null;

        endData = filterData(filterOptions, data);
        toysRoot.innerHTML = '';
        renderToys(endData, toysRoot);
      });
    });

    const filterColor: HTMLElement[] = [...document.querySelectorAll('.color-toggle')!] as HTMLElement[];

    filterColor.forEach((elem) => {
      elem.addEventListener('input', () => {
        filterOptions.color[elem.id] = !filterOptions.color[elem.id] ? true : null;

        endData = filterData(filterOptions, data);
        toysRoot.innerHTML = '';
        renderToys(endData, toysRoot);
      });
    });

    yearsRange.noUiSlider!.on('update', () => {
      filterOptions.yearRange = yearsRange.noUiSlider!.get() as string[];

      endData = filterData(filterOptions, data);
      toysRoot.innerHTML = '';
      renderToys(endData, toysRoot);
    });

    countRange.noUiSlider!.on('update', () => {
      filterOptions.countRange = countRange.noUiSlider!.get() as string[];

      endData = filterData(filterOptions, data);
      toysRoot.innerHTML = '';
      renderToys(endData, toysRoot);
    });

    const resetFilters: HTMLElement = document.querySelector('#reset-filter')! as HTMLElement;
    const clearSearch: HTMLElement = document.querySelector('#clear-search')! as HTMLElement;
    const searchInput: HTMLInputElement = document.querySelector('#search-input')! as HTMLInputElement;

    resetFilters.addEventListener('click', () => {
      const allInputs: HTMLElement[] = [...document.querySelectorAll('input[type="checkbox"]:checked')!] as HTMLElement[];

      yearsRange.noUiSlider!.set([1940, 2021]);
      countRange.noUiSlider!.set([1, 12]);
      allInputs.forEach((elem) => elem.click());
      searchInput.value = '';

      endData = data;

      toysRoot.innerHTML = '';
      toyShapeSvg.map((item) => item.classList.remove('size-svg_selected'));
      toySizeSvg.map((item) => item.classList.remove('size-svg_selected'));
      renderToys(endData, toysRoot);
    });

    toysRoot.innerHTML = '';
    renderToys(endData, toysRoot);

    searchInput.addEventListener('input', () => {
      if (searchInput.value) {
        clearSearch.classList.add('search-container__input-container__clear-search_visible');
      } else {
        clearSearch.classList.remove('search-container__input-container__clear-search_visible');
      }

      filterOptions.name = searchInput.value;
      endData = filterData(filterOptions, data);
      toysRoot.innerHTML = '';
      renderToys(endData, toysRoot);
    });
    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      clearSearch.classList.remove('search-container__input-container__clear-search_visible');

      filterOptions.name = searchInput.value;
      endData = filterData(filterOptions, data);
      toysRoot.innerHTML = '';
      renderToys(endData, toysRoot);
    });
    searchInput.addEventListener('focusin', () => {
      if (searchInput.value) {
        clearSearch.classList.add('search-container__input-container__clear-search_visible');
      }
    });
  },
};

export default Toys;
