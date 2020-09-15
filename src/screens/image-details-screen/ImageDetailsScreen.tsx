import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, TouchableOpacity } from 'react-native';
import { StackParamList } from '../../utils';
import * as s from './ImageDetailsScreen.styled';
import { DetailItem } from '../../components';
import { Photo } from '../../components/photo-component';

type Props = StackScreenProps<StackParamList, 'Details'>;

export const ImageDetailsScreen = (props: Props): JSX.Element => {
  const { navigation, route } = props;

  // @ts-ignore
  const { imageProps } = route.params;

  // @ts-ignore
  const { aperture, focal_length, exposure_time, make, model, iso } = route.params?.imageProps.exif;

  const noExifData: boolean =
    // @ts-ignore
    Object.values(props.route.params?.imageProps.exif).every((element: string | number) => null === element);

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <s.Back>
                <s.BackText>{'Back'}</s.BackText>
              </s.Back>
            </TouchableOpacity>
            <Photo imageProps={imageProps} />
            <s.BorderLine />
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
