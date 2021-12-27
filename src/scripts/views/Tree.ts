import treeView from './components/treeView';
import Data from '../controller/loader';
import { IToyList } from '../interfaces/itoyList';
import FavoriteToy from './components/favoriteToy';

const Tree = {
  render: async () => {
    const view: string = `${treeView}`;

    return view;
  },
  afterRender: async (): Promise<void> => {
    const toys: IToyList = await Data.getData('./assets/data.json');
    Tree.renderFavotitesList(toys);
    Tree.dragAndDrop();
    Tree.setBackground();
    Tree.setTree();
    Tree.playMusic();
    Tree.setSnowfall();
    Tree.hideExistingToys();
  },
  renderFavotitesList: (toys: IToyList): void => {
    const data: IToyList = toys;
    const favoritesRoot: HTMLElement = document.querySelector('.favorites-root')! as HTMLElement;
    const favoritesToyList: number[] = sessionStorage.getItem('favorites')
      ? JSON.parse(sessionStorage.getItem('favorites') || '[]')
      : [];

    if (!JSON.parse(sessionStorage.getItem('favorites') || '[]').length) {
      for (let i = 0; i < 20; i += 1) {
        favoritesToyList.push(i);
      }
    }

    favoritesToyList.forEach((favorite, index) => {
      const favoriteToy: FavoriteToy = new FavoriteToy(data[favorite].num, data[index].count);
      favoritesRoot.innerHTML += favoriteToy.render();
    });
  },
  dragAndDropClone: (parent: HTMLElement, count: HTMLElement): void => {
    const toys: HTMLElement[] = <HTMLScriptElement[]>[...document.querySelectorAll('.existToy')!];
    const originalParent: HTMLElement = parent;
    const originalCount: HTMLElement = count;

    toys.forEach((toy) => {
      Tree.resetDragStartBehavior(toy);
      toy.addEventListener('mousedown', (event) => {
        function moveCopyAt(pageX: number, pageY: number): void {
          toy.style.opacity = '0.7';
          toy.style.left = `${pageX - toy.offsetWidth / 2}px`;
          toy.style.top = `${pageY - toy.offsetHeight / 2}px`;
        }

        function copyOnMouseMove(mouseEvent: MouseEvent): void {
          moveCopyAt(mouseEvent.pageX, mouseEvent.pageY);

          toy.hidden = true;
          const elemBelow: HTMLElement = document.elementFromPoint(mouseEvent.clientX, mouseEvent.clientY) as HTMLElement;
          toy.hidden = false;

          if (!elemBelow) return;

          const treeDroppableArea = elemBelow.closest('.tree-map') as HTMLElement;

          if (treeDroppableArea) {
            toy.removeEventListener('mouseup', copyLeaveDroppable);
            toy.addEventListener('mouseup', copyEnterDroppable);
          } else {
            toy.removeEventListener('mouseup', copyEnterDroppable);
            toy.addEventListener('mouseup', copyLeaveDroppable);
          }
        }

        function copyLeaveDroppable(): void {
          document.removeEventListener('mousemove', copyOnMouseMove);

          const clonePositionLeft: string = `${originalParent.offsetLeft + originalParent.offsetWidth / 2.5}px`;
          const clonePositionTop: string = `${originalParent.offsetTop + originalParent.offsetHeight * 1.5}px`;
          toy.style.left = `${clonePositionLeft}`;
          toy.style.top = `${clonePositionTop}`;

          originalCount.innerHTML = `${Number(originalCount.textContent) + 1}`;

          toy.ontransitionend = () => {
            toy.remove();
          };
          toy.onmouseup = null;
        }

        function copyEnterDroppable() {
          document.removeEventListener('mousemove', copyOnMouseMove);

          toy.style.opacity = '1';
          toy.style.transform = 'scale(0.7)';

          toy.onmouseup = null;
        }

        toy.style.transform = 'scale(1.1)';
        document.querySelector('#root')!.append(toy);

        moveCopyAt(event.pageX, event.pageY);

        document.addEventListener('mousemove', copyOnMouseMove);
      });
    });
  },
  dragAndDrop: (): void => {
    const toys: HTMLElement[] = [...document.querySelectorAll('.favorite-img')!] as HTMLElement[];

    toys.forEach((toy, index) => {
      Tree.resetDragStartBehavior(toy);
      toy.addEventListener('mousedown', (event) => {
        const count: HTMLElement = toy.nextElementSibling! as HTMLElement;
        const parent: HTMLElement = toy.parentElement!;
        const shiftX: number = event.clientX - toy.getBoundingClientRect().left;
        const shiftY: number = event.clientY - toy.getBoundingClientRect().top;

        const clone: HTMLElement = toy.cloneNode(true) as HTMLElement;

        clone.id = `${index + 1}-2`;
        clone.classList.add('existToy');
        clone.style.transition = '0.7s all ease';
        clone.style.zIndex = '1000';
        clone.style.margin = '0';
        clone.style.transform = 'scale(1.1)';

        document.querySelector('#root')!.append(clone);

        function moveAt(pageX: number, pageY: number): void {
          clone.style.opacity = '0.7';
          clone.style.left = `${pageX - shiftX}px`;
          clone.style.top = `${pageY - shiftY}px`;
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(mouseEvent: MouseEvent): void {
          moveAt(mouseEvent.pageX, mouseEvent.pageY);

          clone.hidden = true;
          const elemBelow: HTMLElement = document.elementFromPoint(mouseEvent.clientX, mouseEvent.clientY) as HTMLElement;
          clone.hidden = false;

          if (!elemBelow) return;

          const treeDroppableArea: HTMLElement = elemBelow.closest('.tree-map')!;

          if (treeDroppableArea) {
            clone.removeEventListener('mouseup', leaveDroppable);
            clone.addEventListener('mouseup', enterDroppable);
          } else {
            clone.removeEventListener('mouseup', enterDroppable);
            clone.addEventListener('mouseup', leaveDroppable);
          }
        }

        function enterDroppable(): void {
          document.removeEventListener('mousemove', onMouseMove);

          clone.style.opacity = '1';
          clone.style.transform = 'scale(0.7)';
          clone.onmouseup = null;
          if (Number(count.innerHTML) > 0) {
            count.innerHTML = `${Number(count.textContent) - 1}`;
          }
          if (count.innerHTML === '0') {
            toy.remove();
          }
          const newToy: HTMLElement = clone.cloneNode(true) as HTMLElement;
          clone.parentElement!.replaceChild(newToy, clone);
          Tree.dragAndDropClone(parent, count);
        }

        function leaveDroppable(): void {
          document.removeEventListener('mousemove', onMouseMove);

          const clonePositionLeft: string = `${event.pageX - shiftX}px`;
          const clonePositionTop: string = `${event.pageY - shiftY}px`;
          clone.style.left = `${clonePositionLeft}`;
          clone.style.top = `${clonePositionTop}`;

          clone.ontransitionend = () => {
            clone.remove();
          };
          clone.onmouseup = null;
        }

        document.addEventListener('mousemove', onMouseMove);
        Tree.resetDragStartBehavior(clone);
      });
    });
  },
  resetDragStartBehavior: (target: HTMLElement): void => {
    target.ondragstart = () => {
      return false;
    };
  },
  hideExistingToys: (): void => {
    window.addEventListener('hashchange', () => {
      const existToys: HTMLElement[] = [...document.querySelectorAll('.existToy')!] as HTMLElement[];
      if (window.location.hash.split('/')[1] === 'tree') {
        existToys.forEach((toy) => {
          toy.style.display = 'block';
        });
      } else {
        existToys.forEach((toy) => {
          toy.style.display = 'none';
        });
      }
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
        <map class="tree-map" name="image-map">
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
