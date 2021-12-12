const Header = {
  render: async () => {
    const view = `
    <header class="header" id="header">
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list__item">
            <a href="/#/" class="menu__list__item__link">
              <img class="menu__list__item__link__img" src="./assets/svg/homepage-logo.svg" alt="homepage-logo">
            </a>
          </li>
          <li class="menu__list__item">
            <a href="/#/toys" class="menu__list__item__link">Игрушки</a>
          </li>
          <li class="menu__list__item">
            <a href="/#/tree" class="menu__list__item__link">Ёлка</a>
          </li>
        </ul>
      </nav>
    </header>
    `;

    return view;
  },
  after_render: async () => {},
};

export default Header;
