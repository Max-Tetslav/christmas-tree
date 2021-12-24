class FavoriteToy {
  count: string | number;
  num: string;
  constructor(
    num: string,
    count: string | number,
  ){
    this.count = count;
    this.num = num;
  }
  
  render(){
    return `
      <div class="toy-toggle">
        <img class="favorite-img" src="../../../assets/toys/${this.num}.png">
        <p class="favorite-count">${this.count}</p>  
      </div>
    `;
  }
}

export default FavoriteToy;