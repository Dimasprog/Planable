import React from 'react';
import { Image, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as s from './ImageCard.styled';
import { LIKE_IMAGE, SCREEN_WIDTH } from '../../utils/constatnts';
import { StackParamList } from '../../utils';
import { ImageProps } from '../../interfaces';

interface Props {
  imageProps: ImageProps;
  navigation: StackNavigationProp<StackParamList, 'Image'>;
}

export const ImageCard = (props: Props): JSX.Element => {
  const { imageProps, navigation } = props;
  const { likes, height, width, urls } = imageProps;

  const imageHeight: number =
    width > height
      ? SCREEN_WIDTH / (width / height)
      : SCREEN_WIDTH * (height / width);

  return (
    <Pressable onPress={() => navigation.navigate('Details', { imageProps })}>
      <s.ImageContainer>
        <Image
          style={{
            flex: 1,
            width: SCREEN_WIDTH,
            height: imageHeight,
            resizeMode: 'contain',
          }}
          source={{ uri: urls.small }}
        />
        <s.Likes>
          <Image source={LIKE_IMAGE} height={32} width={32} />
          <s.LikesCount>{likes}</s.LikesCount>
        </s.Likes>
      </s.ImageContainer>
    </Pressable>
  );
};
