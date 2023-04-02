import { createContext, useState } from 'react';

import { CreateReservationModal } from '@/components/createReservationModal/CreateReservationModal';
import Icon from '@/components/icon/Icon';
import { HeaderWrapper, PageWrapper } from '@/styles/home.styles';
import { spacing } from '@/theme';

import Text from '../components/text/Text';

export const CreateReservationModalVisibilityContext = createContext(false);

const Home = () => {
  const [isReservationModalVisible, setIsReservationModalVisible] =
    useState<boolean>(false);

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
          />
        </CreateReservationModalVisibilityContext.Provider>
      </HeaderWrapper>
    </PageWrapper>
  );
};

export default Home;
