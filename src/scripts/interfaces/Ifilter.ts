export default interface Ifilter {
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
  countRange: string | null;
  yearRange: string | null;

  render?(target: Element): void;
}
