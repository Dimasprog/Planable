export interface ImageProps {
  id: string;
  width: number;
  height: number;
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  };
  likes: number;
}
