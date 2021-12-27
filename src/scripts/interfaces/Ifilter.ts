export default interface IFilter {
  name: string | null;
  favorite: boolean | null;
  shape: {
    [key: string]: boolean | string | null;
  };
  size: {
    [key: string]: boolean | string | null;
  };
  color: {
    [key: string]: boolean | string | null;
  };
  countRange: string[] | number[] | null;
  yearRange: string[] | number[] | null;
}
