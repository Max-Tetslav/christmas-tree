class Toy {
  color: string;

  count: string | number;

  favourite: boolean;

  name: string;

  num: string;

  shape: string;

  size: string;

  year: string | number;

  constructor(
    color: string,
    count: string | number,
    favourite: boolean,
    name: string,
    num: string,
    shape: string,
    size: string,
    year: string | number,
  ) {
    this.color = color;
    this.count = count;
    this.favourite = favourite;
    this.name = name;
    this.num = num;
    this.shape = shape;
    this.size = size;
    this.year = year;
  }

  render() {
    return `
    <div class="toy">
      <h3 class="toy__name toy-root">${this.name}</h3>
      <img class="toy__img" src="./assets/toys/${this.num}.png" alt="toy-${this.num}">
      <p class="toy__quantity">Колличество:
        <span class="toy__quntity-root toy-root">${this.count}</span>
      </p>
      <p class="toy__year">Год покупки:
        <span class="toy__year-root toy-root">${this.year}</span>
      </p>
      <p class="toy__shape">Форма:
        <span class="toy__shape-root toy-root">${this.shape}</span>
      </p>
      <p class="toy__color">Цвет:
        <span class="toy__color-root toy-root">${this.color}</span>
      </p>
      <p class="toy__size">Размер:
        <span class="toy__size-root toy-root">${this.size}</span>
      </p>
      <p class="toy__favourite">Любимая:
        <span class="toy__favourite-root toy-root">${this.favourite ? 'Да' : 'Нет'}</span>
      </p>
    </div>
    `;
  }
}

export default Toy;
