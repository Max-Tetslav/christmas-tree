// import Ifilter from "../interfaces/Ifilter";
// import ItoyList from '../interfaces/ItoyList';
// import Itoy from "../interfaces/Itoy";

// function filter(options: Ifilter, array: ItoyList){
//   let data = array;
//   let filterOptions = options;

//   data = data.filter(item => {
//     if(Object.keys(filterOptions).length){
//       for(let key in filterOptions){
//       if(item[key] === undefined || item[key] !== data[key]){
//         return false;
//       }
//      }
//     }

//     return true;
//   });

//   return data;

// }

//  // if(options.favorite){
//   //   let toys = [...document.querySelectorAll('.toy')];
//   //   const counter = document.querySelector('.favourites__counter')!;

//   //   toys.map(item => item.addEventListener('click', () => {
//   //     if(!item.classList.contains('toy-favourites') && counter.textContent !== '20'){
//   //       item.classList.add('toy-favourites');
//   //       counter.textContent = String(Number(counter.textContent) + 1);
//   //     } else if(item.classList.contains('toy-favourites') && counter.textContent !== '0') {
//   //       item.classList.remove('toy-favourites');
//   //       counter.textContent = String(Number(counter.textContent) - 1);
//   //     } else if(counter.textContent === '20'){
//   //       alert('Извините, все слоты заполнены!');
//   //     }
//   //   }));
//   // }
