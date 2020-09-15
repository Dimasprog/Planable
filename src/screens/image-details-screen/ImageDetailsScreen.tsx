import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, Image, Pressable } from 'react-native';
import { StackParamList } from '../../utils';
import * as s from './ImageDetailsScreen.styled';
import { DetailItem } from '../../components';
import { BACK_IMAGE } from '../../utils/constatnts';
import { Photo } from '../../components/photo-component';

type Props = StackScreenProps<StackParamList, 'Details'>;

export const ImageDetailsScreen = (props: Props): JSX.Element => {
  const { navigation, route } = props;

  // @ts-ignore
  const { imageProps } = route.params;

  // @ts-ignore
  const {
    aperture,
    focal_length,
    exposure_time,
    make,
    model,
    iso,
  } = route.params?.imageProps.exif;

  const noExifData: boolean =
    // @ts-ignore
    Object.values(props.route.params?.imageProps.exif).every(
      (element: string | number) => null === element,
    );

  if (noExifData) {
    Alert.alert('No details!', '', [
      {
        onPress: () => navigation.goBack(),
      },
    ]);
  }

  return (
    <s.DetailsScroll showsVerticalScrollIndicator={false}>
      <s.Details>
        {!noExifData && (
          <>
            <Pressable onPress={() => navigation.goBack()}>
              <s.Back>
                <Image source={BACK_IMAGE} width={32} height={32} />
              </s.Back>
            </Pressable>
            <Photo imageProps={imageProps} />
          </>
        )}
        {make && <DetailItem detailsProps={{ key: 'Make', value: make }} />}
        {model && <DetailItem detailsProps={{ key: 'Model', value: model }} />}
        {focal_length && (
          <DetailItem
            detailsProps={{ key: 'Focal length', value: focal_length }}
          />
        )}
        {exposure_time && (
          <DetailItem
            detailsProps={{ key: 'Expose time', value: exposure_time }}
          />
        )}
        {aperture && (
          <DetailItem detailsProps={{ key: 'Aperture', value: aperture }} />
        )}
        {iso && <DetailItem detailsProps={{ key: 'ISO', value: iso }} />}
      </s.Details>
    </s.DetailsScroll>
  );
};
