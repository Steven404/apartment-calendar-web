import dayjs from 'dayjs';
import React from 'react';

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
  onDelete: (reservation: ReservationType) => void;
  reservation: ReservationType;
}

const ReservationCard = ({
  onDelete,
  reservation,
}: ReservationCardPropsType) => {
  const handleDelete = () => {
    onDelete(reservation);
  };

  return (
    <Wrapper>
      <Info>
        <Details>
          <div>
            <Text color="textGrayDark" weight={300}>
              Customer full name:&nbsp;
            </Text>
            <Text weight={700} color="textGrayDark">
              {reservation.customerFullName}
            </Text>
          </div>
          <div>
            <HorizontalLine />
          </div>
        </Details>
        <Details>
          <div>
            <Text color="textGrayDark" weight={300}>
              From - Until:&nbsp;
            </Text>
            <Text weight={700} color="textGrayDark">
              {dayjs(reservation.checkIn).format('DD/MM/YYYY')}&nbsp;-&nbsp;
              {dayjs(reservation.checkOut).format('DD/MM/YYYY')}
            </Text>
          </div>
        </Details>
      </Info>
      <Icon
        onClick={handleDelete}
        color="textGrayDark"
        icon="DeleteForever"
        size="xl"
      />
    </Wrapper>
  );
};

export default ReservationCard;
