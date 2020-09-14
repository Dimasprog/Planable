import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../utils';
import {
  BASE_URL,
  CLIENT_ID,
  IMAGE_ON_PAGE,
  NO_INTERNET_CONNECTION_MESSAGE,
  RATE_LIMIT_EXCEEDED_MESSAGE,
} from '../../utils/constatnts';
import { ImageProps } from '../../interfaces';
import { ImageCard } from '../../components/image-component';
import * as s from './ImageScreen.styled';

type Props = StackScreenProps<StackParamList, 'Image'>;

export const ImageScreen = (props: Props): JSX.Element => {
  const [imageList, setImageList] = useState<ImageProps[]>();
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  async function fetchImageList() {
    const url = `${BASE_URL}photos/random?count=${IMAGE_ON_PAGE}&client_id=${CLIENT_ID}`;

    try {
      const response: Response = await fetch(url);
      const data: ImageProps[] = await response.json();
      setImageList(data);
    } catch (error) {
      if (error.message === NO_INTERNET_CONNECTION_MESSAGE) {
        Alert.alert('Connection error', 'Turn on internet connection!', [
          {
            text: 'Connect',
            onPress: () => fetchImageList(),
          },
        ]);
      } else if (error.message === RATE_LIMIT_EXCEEDED_MESSAGE) {
        Alert.alert('Server error', 'Request rete limit exceeded!');
      } else {
        Alert.alert('Unknown error', error.message);
      }
    }

    setIsRefresh(false);
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
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={fetchImageList} />
        }
        renderItem={(image: ListRenderItemInfo<ImageProps>) => (
          <ImageCard imageProps={image.item} navigation={props.navigation} />
        )}
      />
    </s.MainContainer>
  );
};
