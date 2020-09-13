import React from 'react';
import { Image } from 'react-native';
import { ImageProps } from '../../interfaces';
import * as s from './ImageCard.styled';

export const ImageCard = (props: ImageProps): JSX.Element => {
  const { urls, likes } = props;

  return (
    <s.ImageContainer>
      <Image
        style={{ flex: 1, width: '100%', height: 600, resizeMode: 'contain' }}
        source={{ uri: urls.small }}
      />
    </s.ImageContainer>
  );
};
