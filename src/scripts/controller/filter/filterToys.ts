import Ifilter from '../../interfaces/Ifilter';
import Itoy from '../../interfaces/Itoy';
import ToyList from '../../interfaces/ItoyList';
import sortToys from './sort';

function filterData(options: Ifilter, data: ToyList) {
  let newData = data;

  if (options.favorite) {
    newData = newData.filter((item) => item.favorite === true);
  } else {
    newData = data;
  }

  if (options.shape) {
    const trueValues = Object.entries(options.shape).filter((item) => item[1] === true);
    const translatedValues: Array<string> = [];
    trueValues.forEach((item) => {
      switch (item[0]) {
        case 'ball':
          translatedValues.push('шар');
          break;
        case 'bell':
          translatedValues.push('колокольчик');
          break;
        case 'pinecone':
          translatedValues.push('шишка');
          break;
        case 'snowflake':
          translatedValues.push('снежинка');
          break;
        case 'figure':
          translatedValues.push('фигурка');
          break;
        default:
          break;
      }
    });
    let shapeData: Array<Itoy> = [];

    if (translatedValues.length === 0) {
      shapeData = newData;
    } else {
      for (let i = 0; i < translatedValues.length; i += 1) {
        shapeData = [...shapeData, ...newData.filter((item) => item.shape === translatedValues[i])];
      }
    }

    newData = shapeData;
  }

  if (options.size) {
    const trueValues = Object.entries(options.size).filter((item) => item[1] === true);
    const translatedValues: Array<string> = [];
    trueValues.forEach((item) => {
      switch (item[0]) {
        case 'big':
          translatedValues.push('большой');
          break;
        case 'medium':
          translatedValues.push('средний');
          break;
        case 'small':
          translatedValues.push('малый');
          break;
        default:
          break;
      }
    });

    let sizeData: Array<Itoy> = [];

    if (translatedValues.length === 0) {
      sizeData = newData;
    } else {
      for (let i = 0; i < translatedValues.length; i += 1) {
        sizeData = [...sizeData, ...newData.filter((item) => item.size === translatedValues[i])];
      }
    }

    newData = sizeData;
  }

  if (options.color) {
    const trueValues = Object.entries(options.color).filter((item) => item[1] === true);
    const translatedValues: Array<string> = [];
    trueValues.forEach((item) => {
      switch (item[0]) {
        case 'white':
          translatedValues.push('белый');
          break;
        case 'yellow':
          translatedValues.push('желтый');
          break;
        case 'red':
          translatedValues.push('красный');
          break;
        case 'blue':
          translatedValues.push('синий');
          break;
        case 'green':
          translatedValues.push('зелёный');
          break;
        default:
          break;
      }
    });
    let colorData: Array<Itoy> = [];

    if (translatedValues.length === 0) {
      colorData = newData;
    } else {
      for (let i = 0; i < translatedValues.length; i += 1) {
        colorData = [...colorData, ...newData.filter((item) => item.color === translatedValues[i])];
      }
    }

    newData = colorData;
  }

  if (options.countRange) {
    options.countRange = options.countRange.map((item) => Number(item));
    newData.forEach((item) => item.count = Number(item.count));

    newData = newData.filter((item) => item.count >= options.countRange![0] && item.count <= options.countRange![1]);
  } 

  if (options.yearRange) {
    options.yearRange = options.yearRange.map((item) => Number(item));
    newData.forEach((item) => item.year = Number(item.year));

    newData = newData.filter((item) => item.year >= options.yearRange![0] && item.year <= options.yearRange![1]);
  }

  sortToys(newData);

  return newData;
}

export default filterData;
