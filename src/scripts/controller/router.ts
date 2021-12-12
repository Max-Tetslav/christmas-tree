import Header from '../views/header';
import Footer from '../views/footer';
import Home from '../views/home';
import Toys from '../views/toys';
import Tree from '../views/Tree';
import IView from '../interfaces/view';

interface IRoutesList {
  [key: string]: IView;
}

const routes: IRoutesList = {
  '/': Home,
  '/toys': Toys,
  '/tree': Tree,
};

const locationURL = {
  getURL: () => {
    const url = window.location.hash.slice(1) || '/';

    return url;
  },
};

const Router = async () => {
  const headerRoot = document.querySelector('.header-root')!;
  const contentRoot = document.querySelector('.content-root')!;
  const footerRoot = document.querySelector('.footer-root')!;

  headerRoot.innerHTML = await Header.render();
  await Header.after_render();
  footerRoot.innerHTML = await Footer.render();
  await Footer.after_render();

  const url = locationURL.getURL();

  const page: IView = routes[url];

  contentRoot.innerHTML = await page.render();
  await page.after_render();
};

export default Router;
