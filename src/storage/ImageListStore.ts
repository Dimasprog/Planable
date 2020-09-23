import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

export async function storeLocalImageList(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

export async function retrieveLocalImageList(key: string): Promise<string | undefined> {
  const value: string | null = await AsyncStorage.getItem(key);

  if (null !== value) {
    return value;
  }

  throw new Error('No image list data');
}

export async function removeLocalImageList(key: string) {
  await AsyncStorage.removeItem(key).then(() => Alert.alert('Async Storage', 'List has been deleted!'));
}
