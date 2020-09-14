import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

export async function storeLocalImageList(
  key: string,
  value: string,
): Promise<any> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert('Async storage set', `Something went wrong!\n${e}`);
  }
}

export async function retrieveLocalImageList(
  key: string,
): Promise<string | undefined> {
  const value: string | null = await AsyncStorage.getItem(key);

  if (null !== value) {
    return value;
  }

  throw new Error('No image list data');
}
