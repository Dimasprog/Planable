export interface ImageProps {
  id: string;
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  };
  likes: number;
}
