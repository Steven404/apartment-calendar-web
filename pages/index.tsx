import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SxProps } from '@mui/material/styles';
import { useState } from 'react';

import Icon from '@/components/icon/Icon';
import { TextInput } from '@/components/textInput/TextInput';
import { HeaderWrapper, PageWrapper } from '@/styles/home.styles';
import { spacing } from '@/theme';

import Text from '../components/text/Text';

const modalBoxStyle: SxProps = {
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  left: '50%',
  p: 4,
  position: 'absolute' as const,
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

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
      </HeaderWrapper>
      <Modal
        open={isReservationModalVisible}
        onClose={() => setIsReservationModalVisible(false)}
      >
        <Box sx={modalBoxStyle}>
          <Text color="darkBlue" weight={800} size="lg">
            Add reservation
          </Text>
          <TextInput
            label="Name"
            hasError={false}
            placeholder="John Doe"
            icon="Person"
          />
        </Box>
      </Modal>
    </PageWrapper>
  );
};

export default Home;
