import { createContext, useState } from 'react';

import { CreateReservationModal } from '@/components/createReservationModal/CreateReservationModal';
import Icon from '@/components/icon/Icon';
import ReservationCard from '@/components/reservationCard/ReservationCard';
import useReservations from '@/modules/useReservations';
import {
  HeaderWrapper,
  PageWrapper,
  ReservationsWrapper,
} from '@/styles/home.styles';
import { spacing } from '@/theme';

import Text from '../components/text/Text';

export const CreateReservationModalVisibilityContext = createContext(false);

const Home = () => {
  const [isReservationModalVisible, setIsReservationModalVisible] =
    useState<boolean>(false);

  const { deleteReservation, reservations } = useReservations(
    isReservationModalVisible
  );

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Text
          margin={`0 ${spacing.xl} 0 0 `}
          color="textGrayDark"
          size="xl"
          weight={700}
        >
          Reservations
        </Text>
        <Icon
          icon="ControlPoint"
          color="textGrayDark"
          size="xxxl"
          onClick={() => setIsReservationModalVisible(true)}
        />
      </HeaderWrapper>
      <ReservationsWrapper>
        {reservations.map((reservation) => (
          <ReservationCard
            onDelete={deleteReservation}
            key={reservation.checkIn}
            reservation={reservation}
          />
        ))}
      </ReservationsWrapper>
      <CreateReservationModalVisibilityContext.Provider
        value={isReservationModalVisible}
      >
        <CreateReservationModal
          onCloseRequest={() => setIsReservationModalVisible(false)}
          existingReservations={reservations}
        />
      </CreateReservationModalVisibilityContext.Provider>
    </PageWrapper>
  );
};

export default Home;
