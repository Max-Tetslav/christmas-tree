const Header = {
  render: async () => {
    const view = `
    <header class="header" id="header">
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list__item">
            <a href="/#/" class="menu__list__item__link" id="home-view">
              <img class="menu__list__item__link__img" src="./assets/svg/homepage-logo.svg" alt="homepage-logo">
            </a>
          </li>
          <li class="menu__list__item">
            <a href="/#/toys" class="menu__list__item__link" id="toys-view">Игрушки</a>
          </li>
          <li class="menu__list__item">
            <a href="/#/tree" class="menu__list__item__link" id="tree-view">Ёлка</a>
          </li>
        </ul>
      </nav>
    </header>
    `;

    return view;
  },
  afterRender: async () => {
    const homeLink: HTMLElement = document.querySelector('#home-view')! as HTMLElement;

    homeLink.addEventListener('click', () => {
      window.location.hash = '/';
    });

    const toysLink: HTMLElement = document.querySelector('#toys-view')! as HTMLElement;

    toysLink.addEventListener('click', () => {
      window.location.hash = '/toys';
    });

    const treeLink: HTMLElement = document.querySelector('#tree-view')! as HTMLElement;

    treeLink.addEventListener('click', () => {
      window.location.hash = '/tree';
    });
  },
};

export default Header;
