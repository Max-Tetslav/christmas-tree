export default interface Ifilter {
  favorite?: boolean;
  sort?: string;
  shape?: {
    bell?: boolean;
    ball?: boolean;
    pinecone?: boolean;
    star?: boolean;
    snowflake?: boolean;
    figure?: boolean;
  };
  size?: {
    big?: boolean;
    medium?: boolean;
    small?: boolean;
  };
  color?: {
    white?: boolean;
    yellow?: boolean;
    red?: boolean;
    blue?: boolean;
    green?: boolean;
  };
  countRange?: string;
  yearRange?: string;

  render?(target: Element): void;
}
