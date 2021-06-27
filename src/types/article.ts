export interface Article {
  id: string;
  img: string;
  title: string;
  text: string;
  createdAt: string | (() => string);
  updateTime: string;
  good: number;
}
