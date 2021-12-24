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
  render: async () => {
    const view = `${toysView}`;

    return view;
  },
  after_render: async () => {
    console.log(sessionStorage.getItem('favorites')?.length);
    const yearsRange: target = document.querySelector('#year-range')!;
    const countRange: target = document.querySelector('#count-range')!;

    createSlider(yearsRange, 1940, 2021, 10);
    createSlider(countRange, 1, 12, 1);

    const data: IToyList = await Data.getData('./assets/data.json');
    let endData: IToyList = data;
    const toysRoot = document.querySelector('.toys-root')!;

    const toySizeSvg = [...document.querySelectorAll('.size-svg')!];
    const toyShapeSvg = [...document.querySelectorAll('.shape-svg')!];
    const toySizeInputs = [...document.querySelectorAll('.size-toggle')!];
    const toyShapeInputs = [...document.querySelectorAll('.shape-toggle')!];

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

    const filterFavourite: Element = document.querySelector('.favorite')!;

    filterFavourite.addEventListener('input', () => {
      filterOptions.favorite = !filterOptions.favorite ? true : null;

      endData = filterData(filterOptions, data);
      toysRoot.innerHTML = '';
      renderToys(endData, toysRoot);
    });

    const filterShape = [...document.querySelectorAll('.shape-toggle')!];

    filterShape.forEach((elem) => {
      elem.addEventListener('input', () => {
        filterOptions.shape[elem.id] = !filterOptions.shape[elem.id] ? true : null;

        endData = filterData(filterOptions, data);
        toysRoot.innerHTML = '';
        renderToys(endData, toysRoot);
      });
    });

    const filterSize = [...document.querySelectorAll('.size-toggle')!];

    filterSize.forEach((elem) => {
      elem.addEventListener('input', () => {
        filterOptions.size[elem.id] = !filterOptions.size[elem.id] ? true : null;

        endData = filterData(filterOptions, data);
        toysRoot.innerHTML = '';
        renderToys(endData, toysRoot);
      });
    });

    const filterColor = [...document.querySelectorAll('.color-toggle')!];

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

    const resetFilters = document.querySelector('#reset-filter')!;
    const clearSearch = document.querySelector('#clear-search')!;
    const searchInput: HTMLInputElement = document.querySelector('#search-input')!;

    resetFilters.addEventListener('click', () => {
      const allInputs = <HTMLElement[]>[...document.querySelectorAll('input[type="checkbox"]:checked')!];

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
