import { createContext, useEffect, useState } from 'react';

import { CreateReservationModal } from '@/components/createReservationModal/CreateReservationModal';
import Icon from '@/components/icon/Icon';
import { HeaderWrapper, PageWrapper } from '@/styles/home.styles';
import { spacing } from '@/theme';
import { ReservationType } from '@/types/ReservationTypes';

import Text from '../components/text/Text';

export const CreateReservationModalVisibilityContext = createContext(false);

const Home = () => {
  const [isReservationModalVisible, setIsReservationModalVisible] =
    useState<boolean>(false);
  const [existingReservations, setExistingReservations] = useState<
    ReservationType[]
  >([]);

  // In an application that got it's data from the backend, this would be the API call that got the existing reservations.
  useEffect(() => {
    if (typeof window !== undefined) {
      const reservations: ReservationType[] = JSON.parse(
        localStorage.getItem('reservations') || '[]'
      );
      setExistingReservations(reservations);
    }
  }, [isReservationModalVisible]); // reload the existing reservations each time the modal opens or closes

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
        <CreateReservationModalVisibilityContext.Provider
          value={isReservationModalVisible}
        >
          <CreateReservationModal
            onCloseRequest={() => setIsReservationModalVisible(false)}
            existingReservations={existingReservations}
          />
        </CreateReservationModalVisibilityContext.Provider>
      </HeaderWrapper>
    </PageWrapper>
  );
};

export default Home;
