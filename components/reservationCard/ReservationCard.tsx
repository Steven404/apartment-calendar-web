import dayjs from 'dayjs';
import React from 'react';

import { spacing } from '@/theme';
import { ReservationType } from '@/types/ReservationTypes';

import Icon from '../icon/Icon';
import Text from '../text/Text';
import {
  Details,
  HorizontalLine,
  Info,
  Wrapper,
} from './ReservationCard.styles';

interface ReservationCardPropsType {
  reservation: ReservationType;
}

const ReservationCard = ({ reservation }: ReservationCardPropsType) => {
  return (
    <Wrapper>
      <Info>
        <Details>
          <Text color="textGrayDark" weight={300}>
            Customer full name:&nbsp;
          </Text>
          <Text weight={700} color="textGrayDark">
            {reservation.customerFullName}
          </Text>
        </Details>
        <HorizontalLine />
        <Text margin={`0 0 0 ${spacing.md}`} color="textGrayDark" weight={300}>
          From - Until:&nbsp;
        </Text>
        <Text weight={700} color="textGrayDark">
          {dayjs(reservation.checkIn).format('DD/MM/YYYY')}&nbsp;-&nbsp;
          {dayjs(reservation.checkOut).format('DD/MM/YYYY')}
        </Text>
      </Info>
      <Icon color="textGrayDark" icon="ControlPoint" size="xl" />
    </Wrapper>
  );
};

export default ReservationCard;
