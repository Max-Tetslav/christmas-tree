import treeView from './components/treeView';
import Data from '../controller/loader';
import { IToyList } from '../interfaces/itoyList';
import FavoriteToy from './components/favoriteToy';

const Tree = {
  render: async () => {
    const view = `${treeView}`;

    return view;
  },
  after_render: async (): Promise<void> => {
    const toys: IToyList = await Data.getData('./assets/data.json');
    Tree.renderFavotitesList(toys);
    Tree.setBackground();
    Tree.setTree();
    Tree.playMusic();
    Tree.setSnowfall();
  },
  renderFavotitesList: (toys: IToyList): void => {
    const data = toys;
    const favoritesRoot = document.querySelector('.favorites-root')!;
    const favoritesToyList: number[] = sessionStorage.getItem('favorites')
      ? JSON.parse(sessionStorage.getItem('favorites') || '[]')
      : [];

    if (!JSON.parse(sessionStorage.getItem('favorites') || '[]').length) {
      for (let i = 0; i < 20; i += 1) {
        favoritesToyList.push(i);
      }
    }

    favoritesToyList.forEach((favorite, index) => {
      const favoriteToy = new FavoriteToy(data[favorite].num, data[index].count);
      favoritesRoot.innerHTML += favoriteToy.render();
    });
  },
  setSnowfall: () => {
    const snowfallSvg = document.querySelector('#snowfall-toggle')!;
    const snowfallToggle = document.querySelector('.snowfall-toggle')!;

    snowfallToggle.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;

      if (target.checked) {
        snowfallSvg.classList.add('music-svg_active');
        const snowfallID = window.setInterval(() => {
          const snowfallRoot = document.querySelector('.tree-container')!;
          const snowflake = document.createElement('i');
          snowflake.classList.add('fa-snowflake');
          snowflake.style.left = `${Math.random() * window.innerWidth}px`;
          snowflake.style.opacity = String(Math.random());
          snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
          snowfallRoot.appendChild(snowflake);

          setTimeout(() => {
            snowflake.remove();
          }, 5000);
        }, 50);

        sessionStorage.setItem('snowfallID', String(snowfallID));
      } else {
        snowfallSvg.classList.remove('music-svg_active');
        clearInterval(Number(sessionStorage.getItem('snowfallID')));
      }
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
        const treeImg = `
        <map name="image-map">
            <area target="" alt="" title="" href="" coords="237,-1,8,624,65,682,146,706,228,700,278,694,292,701,315,710,406,671,430,676,457,666,489,647,465,616,483,610,494,593,460,488,451,454,426,453,432,428,436,413,419,403,413,387,424,379,418,359,411,339,387,341,378,323,392,319,397,316,386,302,364,308,379,293,376,270,374,247,351,249,355,233,335,221,349,203,329,188,335,175,339,158,321,116,294,114,308,93,286,83,299,58,274,57,281,43,263,42,255,34,253,15,247,17" shape="poly">
        </map>
        <img class="tree" src="../../../assets/tree/${index}.png" draggable="false" usemap="#image-map"/>
        `;

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
