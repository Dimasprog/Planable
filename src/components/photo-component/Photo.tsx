import React from 'react';
import { Image } from 'react-native';
import { SCREEN_WIDTH } from '../../utils/constatnts';
import { ImageProps } from '../../interfaces';

interface Props {
  imageProps: ImageProps;
}

export const Photo = (props: Props): JSX.Element => {
  const { imageProps } = props;
  const { height, width, urls } = imageProps;

  const imageHeight: number =
    width > height
      ? SCREEN_WIDTH / (width / height)
      : SCREEN_WIDTH * (height / width);

  return (
    <Image
      style={{
        flex: 1,
        width: SCREEN_WIDTH,
        height: imageHeight,
        resizeMode: 'contain',
      }}
      source={{ uri: urls.small }}
    />
  );
};
