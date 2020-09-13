import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../utils';
import { BASE_URL, CLIENT_ID } from '../../utils/constatnts';
import { ImageProps } from '../../interfaces';
import { ImageCard } from '../../components/image-component';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Image'>;
};

export const ImageScreen = (props: Props): JSX.Element => {
  const [imageList, setImageList] = useState<ImageProps[]>();

  async function fetchImageList() {
    const url = `${BASE_URL}photos/random?count=50&client_id=${CLIENT_ID}`;
    console.log(url);
    const response: Response = await fetch(url);
    const data: ImageProps[] = await response.json();
    setImageList(data);
  }

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <View>
      <FlatList
        data={imageList}
        keyExtractor={(image: ImageProps) => image.id}
        renderItem={(image: ListRenderItemInfo<ImageProps>) => <ImageCard id={image.item.id} urls={image.item.urls} likes={image.item.likes} />}
      />
    </View>
  );
};
