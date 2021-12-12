const Data = {
  getData: async (url:string) => {
    const request = await fetch(url);
    const result = await request.json();

    return result;
  }
}

export default Data;