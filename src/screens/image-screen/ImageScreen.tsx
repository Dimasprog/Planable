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
  IMAGE_LIST,
  IMAGE_ON_PAGE,
  NO_INTERNET_CONNECTION_MESSAGE,
  RATE_LIMIT_EXCEEDED_MESSAGE,
} from '../../utils/constatnts';
import { ImageProps } from '../../interfaces';
import * as s from './ImageScreen.styled';
import { retrieveLocalImageList, storeLocalImageList } from '../../storage';
import { ImageCard } from '../../components';

type Props = StackScreenProps<StackParamList, 'Image'>;

export const ImageScreen = (props: Props): JSX.Element => {
  const [imageList, setImageList] = useState<ImageProps[]>();
  const [isRefresh, setIsRefresh] = useState<boolean>(true);

  const url = `${BASE_URL}photos/random?count=${IMAGE_ON_PAGE}&client_id=${CLIENT_ID}`;

  function displayAlertError(error: string): void {
    if (error === NO_INTERNET_CONNECTION_MESSAGE) {
      Alert.alert('Connection error', 'Turn on internet connection!', [
        {
          text: 'Connect',
          onPress: () => displayImageList(),
        },
      ]);
    } else if (error === RATE_LIMIT_EXCEEDED_MESSAGE) {
      Alert.alert('Server error', 'Request rete limit exceeded!');
    } else {
      Alert.alert('Unknown error', error);
    }
  }

  function saveImageList(list: string | undefined): void {
    if (list) {
      storeLocalImageList(IMAGE_LIST, list);
      setImageList(JSON.parse(list));
      setIsRefresh(false);
    }
  }

  function fetchImageList(): void {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: ImageProps[]) => saveImageList(JSON.stringify(data)))
      .catch((error: Error) => displayAlertError(error.message));
  }

  function displayImageList(): void {
    retrieveLocalImageList(IMAGE_LIST)
      .then((data: string | undefined) => saveImageList(data))
      .catch(() => fetchImageList());
  }

  useEffect(() => {
    // removeLocalImageList(IMAGE_LIST); //for testing
    displayImageList();
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
