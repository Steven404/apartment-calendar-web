import { createContext, useState } from 'react';

import { CreateReservationModal } from '@/components/createReservationModal/CreateReservationModal';
import Icon from '@/components/icon/Icon';
import useReservations from '@/modules/useReservations';
import { HeaderWrapper, PageWrapper } from '@/styles/home.styles';
import { spacing } from '@/theme';
import { ReservationType } from '@/types/ReservationTypes';

import Text from '../components/text/Text';

export const CreateReservationModalVisibilityContext = createContext(false);

const Home = () => {
  const [isReservationModalVisible, setIsReservationModalVisible] =
    useState<boolean>(false);

  const { existingReservations } = useReservations(isReservationModalVisible);

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
      {/* {existingReservations.map(
        (reservation: ReservationType) => reservation.customerFullName
      )} */}
      <CreateReservationModalVisibilityContext.Provider
        value={isReservationModalVisible}
      >
        <CreateReservationModal
          onCloseRequest={() => setIsReservationModalVisible(false)}
          existingReservations={existingReservations}
        />
      </CreateReservationModalVisibilityContext.Provider>
    </PageWrapper>
  );
};

export default Home;
