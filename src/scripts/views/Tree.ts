import treeView from './components/treeView';

const Tree = {
  render: async () => {
    const view = `${treeView}`;

    return view;
  },
  after_render: async () => {
    Tree.renderFavotitesList();
    Tree.setBackground();
    Tree.setTree();
    Tree.playMusic();
  },
  renderFavotitesList: () => {
    let favoritesToyList: number[] = [];

    if (sessionStorage.getItem('favorites')) {
      favoritesToyList = sessionStorage
        .getItem('favorites')!
        .split('')
        .map((item) => {
          return Number(item);
        });
    } else {
      for (let i = 1; i <= 20; i += 1) {
        favoritesToyList.push(i);
      }
    }
    console.log(favoritesToyList);
  },
  setBackground: () => {
    const backgroundList = [...document.querySelectorAll('.background-toggle')!];

    backgroundList.forEach((background, index) => {
      background.addEventListener('input', () => {
        const backgroundRoot: HTMLElement = document.querySelector('.tree-container')!;

        backgroundRoot.style.backgroundImage = `url(../../../../assets/bg/${index}.jpg`;
      });
    });
  },
  setTree: () => {
    const treeList = [...document.querySelectorAll('.tree-toggle')!];

    treeList.forEach((tree, index) => {
      tree.addEventListener('input', () => {
        const treeRoot: HTMLElement = document.querySelector('.tree-container')!;
        const treeImg = `<img class="tree" src="../../../assets/tree/${index}.png"/>`;

        treeRoot.innerHTML = treeImg;
      });
    });
  },
  playMusic: () => {
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
