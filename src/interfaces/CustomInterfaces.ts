interface Urls {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string
}

interface EXIF {
  make: string,
  model: string,
  exposure_time: string,
  aperture: string,
  focal_length: string,
  iso: number
}

export interface ImageProps {
  id: string;
  width: number;
  height: number;
  urls: Urls;
  exif: EXIF;
  likes: number;
}

export interface DetailsProps {
  key: string;
  value: string | number;
}
