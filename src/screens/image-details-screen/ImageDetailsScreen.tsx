import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../utils';
import * as s from './ImageDetailsScreen.styled';
import { DetailItem } from '../../components/detail-item-component';

type Props = StackScreenProps<StackParamList, 'Details'>;

export const ImageDetailsScreen = (props: Props): JSX.Element => {
  // @ts-ignore
  const { aperture, focal_length, exposure_time, make, model, iso } = props.route.params?.imageProps.exif;

  return (
    <s.Details>
      {make && <DetailItem detailsProps={{ key: 'Make', value: make }} />}
      {model && <DetailItem detailsProps={{ key: 'Model', value: model }} />}
      {focal_length && <DetailItem detailsProps={{ key: 'Focal length', value: focal_length }} />}
      {exposure_time && <DetailItem detailsProps={{ key: 'Expose time', value: exposure_time }} />}
      {aperture && <DetailItem detailsProps={{ key: 'Aperture', value: aperture }} />}
      {iso && <DetailItem detailsProps={{ key: 'ISO', value: iso }} />}
    </s.Details>
  );
};
