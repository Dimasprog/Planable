import React from 'react';
import { DetailsProps } from '../../interfaces';
import * as s from './DetailItem.styled';

interface Props {
  detailsProps: DetailsProps;
}

export const DetailItem = (props: Props): JSX.Element => {
  const { detailsProps } = props;
  const { key, value } = detailsProps;
  return (
    <s.Detail>
      <s.DetailKey>{key}</s.DetailKey>
      <s.DetailValue>{value}</s.DetailValue>
    </s.Detail>
  );
};
