import Data from "../controller/loader";
import Itoy from "../interfaces/Itoy";
import Toy from "./components/Toy";

const Toys = {
  render: async () => {
    const view = `
    <form class="filter-container" action="#">
      <fieldset class="filter-container__top">
        <button class="soundToggle"></button>
        <input class="search" type="search" name="search" id="search">
      </fieldset>
      <fieldset class="filter-container__favourite">
        <legend class="favourite-text" for="favourite">Только любимое</legend>
        <input class="favourite" type="checkbox" name="favourite" id="favourite">
      </fieldset>
      <fieldset class="filter-container__sort">
        <legend for="sort">Сортировать</legend>
        <select class="sort" name="sort" id="sort" >
          <option class="sort__item" value="name-up">По названию А-Я</option>
          <option class="sort__item" value="name-down">По названию Я-А</option>
          <option class="sort__item" value="quantity-up">Колличество по убыванию</option>
          <option class="sort__item" value="quantity-down">Колличество по возрастанию</option>
        </select>
      </fieldset>
      <fieldset class="filter-container__shape">
        <legend class="shape-title">Форма</legend>
        <div class="shape-group">
          <label class="shape-name" for="bell">Колокол</label>
          <input class="shape-toggle" type="checkbox" name="bell" id="bell">
          <label class="shape-name" for="ball">Шар</label>
          <input class="shape-toggle" type="checkbox" name="ball" id="ball">
          <label class="shape-name" for="pinecone">Шишка</label>
          <input class="shape-toggle" type="checkbox" name="pinecone" id="pinecone">
          <label class="shape-name" for="star">Звезда</label>
          <input class="shape-toggle" type="checkbox" name="star" id="star">
          <label class="shape-name" for="snowflake">Снежинка</label>
          <input class="shape-toggle" type="checkbox" name="snowflake" id="snowflake">
          <label class="shape-name" for="figure">Фигурка</label>
          <input class="shape-toggle" type="checkbox" name="figure" id="figure">
        </div>
      </fieldset>
      <fieldset class="filter-container__size">
        <legend class="size-title">Размер</legend>
        <label class="size-name" for="big">Большой</label>
        <input class="size-toggle" type="checkbox" name="big" id="big">
        <label class="size-name" for="medium">Средний</label>
        <input class="size-toggle" type="checkbox" name="medium" id="medium">
        <label class="size-name" for="small">Маленький</label>
        <input class="size-toggle" type="checkbox" name="small" id="small">
      </fieldset>
      <fieldset class="filter-container__color">
        <legend class="color-title">Цвет</legend>
        <input class="color" type="checkbox" name="white" id="white">
        <input class="color" type="checkbox" name="yellow" id="yellow">
        <input class="color" type="checkbox" name="red" id="red">
        <input class="color" type="checkbox" name="blue" id="blue">
        <input class="color" type="checkbox" name="green" id="green">
      </fieldset>
      <fieldset class="filter-container__quantity">
        <legend class="quantity-title">Колличество экземпляров</legend>
        <input class="quantity-range" type="range" name="" id="">
      </fieldset>
      <fieldset class="filter-container__year">
        <legend class="year-title">Год приобретения</legend>
        <input class="year-range" type="range" name="" id="">
      </fieldset>
      <fieldset class="filter-container__buttons">
        <button class="filter-submit">Применить</button>
        <button class="filter-reset">Сбросить</button>
      </fieldset>
    </form>
    <section class="toys-container">
      <div class="toys-container__top">
        <h1 class="toy-title">Игрушки</h1>
        <div class="favourites">
          <img src="" alt="" class="favourites__img">
          <span class="favourites__counter">20</span>
        </div>
      </div>
      <div class="toys-root">
    
      </div>
    </section>
    `;

  //   <div class="toy">
  //   <h3 class="toy__name toy-root"></h3>
  //   <img class="toy__img" src="" alt="" >
  //   <p class="toy__quantity">Колличество:</p>
  //   <span class="toy__quntity-root toy-root"></span>
  //   <p class="toy__year">Год покупки:</p>
  //   <span class="toy__year-root toy-root"></span>
  //   <p class="toy__shape">Форма:</p>
  //   <span class="toy__shape-root toy-root"></span>
  //   <p class="toy__color">Цвет:</p>
  //   <span class="toy__color-root toy-root"></span>
  //   <p class="toy__size">Размер:</p>
  //   <span class="toy__size-root toy-root"></span>
  //   <p class="toy__favourite">Любимая:</p>
  //   <span class="toy__favourite-root toy-root"></span>
  // </div>

    return view;
  },
  after_render: async () => {

    const data: Array<Itoy> = await Data.getData('./assets/data.json');
    const toysRoot = document.querySelector('.toys-root')!;


    data.map(item => {
      let toy = new Toy(
        item.color,
        item.count,
        item.favourite,
        item.name,
        item.num,
        item.shape,
        item.size,
        item.year,
      );

      toysRoot.innerHTML += toy.render();
    });

    
  },
};

export default Toys;
