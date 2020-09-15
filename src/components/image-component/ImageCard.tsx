import React from 'react';
import { Image, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as s from './ImageCard.styled';
import { LIKE_IMAGE } from '../../utils/constatnts';
import { StackParamList } from '../../utils';
import { ImageProps } from '../../interfaces';
import { Photo } from '../photo-component';

interface Props {
  imageProps: ImageProps;
  navigation: StackNavigationProp<StackParamList, 'Image'>;
}

export const ImageCard = (props: Props): JSX.Element => {
  const { imageProps, navigation } = props;
  const { likes } = imageProps;

  return (
    <Pressable onPress={() => navigation.navigate('Details', { imageProps })}>
      <s.ImageContainer>
        <Photo imageProps={imageProps} />
        <s.Likes>
          <Image source={LIKE_IMAGE} height={32} width={32} />
          <s.LikesCount>{likes}</s.LikesCount>
        </s.Likes>
      </s.ImageContainer>
    </Pressable>
  );
};
