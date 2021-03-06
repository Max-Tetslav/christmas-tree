import cone from './svg/cone';
import snowflake from './svg/snowflake';
import bell from './svg/bell';
import ballShape from './svg/ballShape';
import figure from './svg/figure';
import favourites from './svg/favourites';

const toysView = `
  <form class="filter-container" action="#" autocomplete="off">
    <div class="favourites-container">
    <span class="favourites-text">0</span>
    ${favourites}
    </div>
    <fieldset class="filter-container__top">
      <button class="soundToggle" type="button"></button>
      <div class="search-container">
        <div class="search-container__input-container">
          <input class="search-container__input-container__search" id="search-input" type="text" placeholder="Поиск" autofocus autocomplete="off" autocorrect="off" name="search" id="search">
        </div>
        <span class="search-container__input-container__clear-search" id="clear-search"></span>
      </div>
    </fieldset>
    <fieldset class="filter-container__favourite flex-fieldset">
      <legend class="favourite-text legend-hide" for="favourite">Только любимое</legend>
      <h3 class="filter-title">Только любимые:</h3>
      <label class="favorite-label">
        <input class="favorite" type="checkbox" name="favourite" id="favorite">
        <span class="checkpoint"></span>
      </label>
    </fieldset>
    <fieldset class="filter-container__sort flex-fieldset">
      <legend class="legend-hide" for="sort">Сортировать</legend>
      <h3 class="filter-title">Сортировать:</h3>
      <div class="sort-container">
        <select class="sort" name="sort" id="sort" >
          <option class="sort__item" value="name-up">По названию А-Я</option>
          <option class="sort__item" value="name-down">По названию Я-А</option>
          <option class="sort__item" value="count-down">По убыванию год покупки</option>
          <option class="sort__item" value="count-up">По возрастанию год покупки</option>
        </select>
      </div>
    </fieldset>
    <fieldset class="filter-container__shape flex-fieldset">
      <legend class="shape-title legend-hide">Форма</legend>
      <h3 class="filter-title">Форма:</h3>
      <div class="shape-group">
        <label class="shape-name" for="bell">${bell}
          <input class="shape-toggle" type="checkbox" name="bell" id="bell">
        </label>
        <label class="shape-name" for="ball">${ballShape}
          <input class="shape-toggle" type="checkbox" name="ball" id="ball">
        </label>
        <label class="shape-name" for="pinecone">${cone}
          <input class="shape-toggle" type="checkbox" name="pinecone" id="pinecone">
        </label>
        <label class="shape-name" for="snowflake">${snowflake}
          <input class="shape-toggle" type="checkbox" name="snowflake" id="snowflake">
        </label>
        <label class="shape-name" for="figure">${figure}
          <input class="shape-toggle" type="checkbox" name="figure" id="figure">
        </label>
      </div>
    </fieldset>
    <fieldset class="filter-container__size flex-fieldset">
      <legend class="size-title legend-hide">Размер</legend>
      <h3 class="filter-title">Размер:</h3>
      <div class="size-group">
        <label class="size-name" for="big">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 64 64">
            <title>ball</title>
            <path class="size-svg" fill="#fff" d="M29.497 1.563c-1.909 1.299-2.423 3.488-1.318 5.608l0.537 1.030-2.841 0.675 0.042 2.91 0.042 2.91-1.417 0.398c-12.864 3.615-20.517 18.273-16.255 31.131 4.945 14.918 21.4 21.389 35.833 14.090 2.271-1.148 6.218-4.797 7.7-7.119 0.502-0.786 1.145-1.662 1.43-1.947s0.456-0.618 0.38-0.741-0.027-0.292 0.109-0.377c0.563-0.348 1.706-3.76 2.39-7.132 2.341-11.544-5.597-24.613-16.928-27.868l-1.423-0.409-0.009-2.898c-0.011-3.354 0.129-3.015-1.364-3.294-1.509-0.282-1.531-0.313-0.92-1.315 2.249-3.688-2.411-8.088-5.988-5.653zM33.49 2.12c2.041 1.056 2.382 3.771 0.699 5.567-0.779 0.832-3.857 0.832-4.615 0-2.784-3.057 0.297-7.439 3.916-5.567z"></path>
          </svg>
          <input class="size-toggle" type="checkbox" name="big" id="big">
        </label>
        <label class="size-name" for="medium">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 64 64">
            <title>ball</title>
            <path class="size-svg" fill="#fff" d="M29.497 1.563c-1.909 1.299-2.423 3.488-1.318 5.608l0.537 1.030-2.841 0.675 0.042 2.91 0.042 2.91-1.417 0.398c-12.864 3.615-20.517 18.273-16.255 31.131 4.945 14.918 21.4 21.389 35.833 14.090 2.271-1.148 6.218-4.797 7.7-7.119 0.502-0.786 1.145-1.662 1.43-1.947s0.456-0.618 0.38-0.741-0.027-0.292 0.109-0.377c0.563-0.348 1.706-3.76 2.39-7.132 2.341-11.544-5.597-24.613-16.928-27.868l-1.423-0.409-0.009-2.898c-0.011-3.354 0.129-3.015-1.364-3.294-1.509-0.282-1.531-0.313-0.92-1.315 2.249-3.688-2.411-8.088-5.988-5.653zM33.49 2.12c2.041 1.056 2.382 3.771 0.699 5.567-0.779 0.832-3.857 0.832-4.615 0-2.784-3.057 0.297-7.439 3.916-5.567z"></path>
          </svg>
          <input class="size-toggle" type="checkbox" name="medium" id="medium">
        </label>
        <label class="size-name" for="small">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64">
            <title>ball</title>
            <path class="size-svg" fill="#fff" d="M29.497 1.563c-1.909 1.299-2.423 3.488-1.318 5.608l0.537 1.030-2.841 0.675 0.042 2.91 0.042 2.91-1.417 0.398c-12.864 3.615-20.517 18.273-16.255 31.131 4.945 14.918 21.4 21.389 35.833 14.090 2.271-1.148 6.218-4.797 7.7-7.119 0.502-0.786 1.145-1.662 1.43-1.947s0.456-0.618 0.38-0.741-0.027-0.292 0.109-0.377c0.563-0.348 1.706-3.76 2.39-7.132 2.341-11.544-5.597-24.613-16.928-27.868l-1.423-0.409-0.009-2.898c-0.011-3.354 0.129-3.015-1.364-3.294-1.509-0.282-1.531-0.313-0.92-1.315 2.249-3.688-2.411-8.088-5.988-5.653zM33.49 2.12c2.041 1.056 2.382 3.771 0.699 5.567-0.779 0.832-3.857 0.832-4.615 0-2.784-3.057 0.297-7.439 3.916-5.567z"></path>
          </svg>
          <input class="size-toggle" type="checkbox" name="small" id="small">
        </label>
      </div>
    </fieldset>
    <fieldset class="filter-container__color flex-fieldset">
      <legend class="color-title legend-hide">Цвет</legend>
      <h3 class="filter-title">Цвет:</h3>
      <div class="color-group">
        <label class="color-label">
          <input class="color-toggle" type="checkbox" name="white" id="white">
          <span></span>
        </label>
        <label class="color-label">
          <input class="color-toggle" type="checkbox" name="yellow" id="yellow">
          <span></span>
        </label>
        <label class="color-label">
          <input class="color-toggle" type="checkbox" name="red" id="red">
          <span></span>
        </label>
        <label class="color-label">
          <input class="color-toggle" type="checkbox" name="blue" id="blue">
          <span></span>
        </label>
        <label class="color-label">
          <input class="color-toggle" type="checkbox" name="green" id="green">
          <span></span>
        </label>
      </div>
    </fieldset>
    <fieldset class="filter-container__count">
      <legend class="count-title filter-title">Колличество экземпляров:</legend>
      <span>1</span>
      <div class="count-range range" id="count-range"></div>
      <span>12</span>
    </fieldset>
    <fieldset class="filter-container__year">
      <legend class="year-title filter-title">Год приобретения:</legend>
      <span>1940</span>
      <div class="year-range range" id="year-range"></div>
      <span>2021</span>
    </fieldset>
    <fieldset class="filter-container__buttons">
      <button class="reset" type="button" id="reset-filter">Сбросить</button>
    </fieldset>
  </form>
  <section class="toys-container">
    <div class="toys-root"></div>
  </section>
`;

export default toysView;
