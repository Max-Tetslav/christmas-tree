import { IToyList } from '../interfaces/itoyList';

const Data = {
  getData: async (url: string): Promise<IToyList> => {
    const request = await fetch(url);
    const result: IToyList = await request.json();

    return result;
  },
};

export default Data;
