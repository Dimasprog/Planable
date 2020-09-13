import React from 'react';
import { Image } from 'react-native';
import { ImageProps } from '../../interfaces';
import * as s from './ImageCard.styled';
import { LIKE_IMAGE, SCREEN_WIDTH } from '../../utils/constatnts';

export const ImageCard = ({ imageProps }: { imageProps: ImageProps }): JSX.Element => {
  const { likes, height, width, urls } = imageProps;

  const imageHeight: number = width > height
    ? SCREEN_WIDTH / (width / height)
    : SCREEN_WIDTH * (height / width);

  return (
    <s.ImageContainer>
      <Image
        style={{ flex: 1, width: SCREEN_WIDTH, height: imageHeight, resizeMode: 'contain' }}
        source={{ uri: urls.small }}
      />
      <s.Likes>
        <Image source={LIKE_IMAGE} height={32} width={32} />
        <s.LikesCount>{likes}</s.LikesCount>
      </s.Likes>
    </s.ImageContainer>
  );
};
