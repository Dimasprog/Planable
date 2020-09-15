import { Dimensions, ImageSourcePropType } from 'react-native';

export const BASE_URL: string = 'https://api.unsplash.com/';

export const CLIENT_ID: string = 'JBe5w4rW_lCuJFWNNEsSfHj6Mh1obxUX-TU8NoRncYc';
export const IMAGE_ON_PAGE: number = 50;
export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const LIKE_IMAGE: ImageSourcePropType = require('../assets/icons/like.png');
export const BACK_IMAGE: ImageSourcePropType = require('../assets/icons/back.png');

export const NO_INTERNET_CONNECTION_MESSAGE: string =
  'TypeError: Network request failed!';
export const RATE_LIMIT_EXCEEDED_MESSAGE: string =
  'JSON Parse error: Unexpected identifier "Rate"!';

export const IMAGE_LIST: string = 'IMAGE_LIST';
