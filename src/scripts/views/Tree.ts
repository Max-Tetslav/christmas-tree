import treeView from './components/treeView';
import Data from '../controller/loader';
import { IToyList } from '../interfaces/itoyList';
import FavoriteToy from './components/favoriteToy';
import IToy from '../interfaces/itoy';

const Tree = {
  render: async () => {
    const view = `${treeView}`;

    return view;
  },
  after_render: async (): Promise<void> => {
    console.log(JSON.parse(sessionStorage.getItem('favorites') || '[]'));
    const toys: IToyList = await Data.getData('./assets/data.json');
    Tree.renderFavotitesList(toys);
    Tree.setBackground();
    Tree.setTree();
    Tree.playMusic();
  },
  renderFavotitesList: (toys: IToyList): void => {
    const data = toys;
    console.log(data[0]);
    let favoritesToyList: number[] = sessionStorage.getItem('favorites')
      ? JSON.parse(sessionStorage.getItem('favorites') || '[]')
      : [];


    if (!JSON.parse(sessionStorage.getItem('favorites') || '[]').length) {
      for (let i = 0; i < 20; i += 1) {
        favoritesToyList.push(i);
      }
    }
    console.log(JSON.parse(sessionStorage.getItem('favorites') || '[]').length);
    const favoritesRoot = document.querySelector('.favorites-root')!;
    // const favoriteCount = document.querySelectorAll('.favorite')!;

    favoritesToyList.forEach((favorite, index) => {
      const favoriteToy = new FavoriteToy(data[favorite].num, data[index].count)
      favoritesRoot.innerHTML += favoriteToy.render();
    });

  },
  setBackground: (): void => {
    const backgroundList = [...document.querySelectorAll('.background-toggle')!];

    backgroundList.forEach((background, index) => {
      background.addEventListener('input', () => {
        const backgroundRoot: HTMLElement = document.querySelector('.tree-container')!;

        backgroundRoot.style.backgroundImage = `url(../../../../assets/bg/${index}.jpg`;
      });
    });
  },
  setTree: (): void => {
    const treeList = [...document.querySelectorAll('.tree-toggle')!];

    treeList.forEach((tree, index) => {
      tree.addEventListener('input', () => {
        const treeRoot: HTMLElement = document.querySelector('.tree-container')!;
        const treeImg = `<img class="tree" src="../../../assets/tree/${index}.png" draggable="false"/>`;

        treeRoot.innerHTML = treeImg;
      });
    });
  },
  playMusic: (): void => {
    const audio = new Audio('../../assets/audio/audio.mp3');
    audio.volume = 0.3;
    const musicToggle = document.querySelector('.music-toggle')!;
    const musicSvg = document.querySelector('.music-svg')!;

    musicToggle.addEventListener('input', () => {
      if (audio.paused) {
        audio.play();
        musicSvg.classList.add('music-svg_active');
      } else {
        audio.pause();
        musicSvg.classList.remove('music-svg_active');
      }
    });
  },
};

export default Tree;
