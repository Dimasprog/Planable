import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../utils';
import { BASE_URL, CLIENT_ID, IMAGE_COUNT } from '../../utils/constatnts';
import { ImageProps } from '../../interfaces';
import { ImageCard } from '../../components/image-component';
import * as s from './ImageScreen.styled';

type Props = StackScreenProps<StackParamList, 'Image'>;

export const ImageScreen = (props: Props): JSX.Element => {
  const [imageList, setImageList] = useState<ImageProps[]>();

  async function fetchImageList() {
    const url = `${BASE_URL}photos/random?count=${IMAGE_COUNT}&client_id=${CLIENT_ID}`;
    const response: Response = await fetch(url);
    const data: ImageProps[] = await response.json();
    setImageList(data);
  }

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <s.MainContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={imageList}
        keyExtractor={(image: ImageProps) => image.id}
        renderItem={(image: ListRenderItemInfo<ImageProps>) =>
          <ImageCard imageProps={image.item} navigation={props.navigation} />}
      />
    </s.MainContainer>
  );
};
