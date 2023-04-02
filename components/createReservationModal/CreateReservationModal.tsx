import { Box, Modal } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import dayjs from 'dayjs';
import $ from 'jquery';
import React, { useContext, useState } from 'react';

import { CreateReservationModalVisibilityContext } from '@/pages';
import { spacing } from '@/theme';
import { ReservationType } from '@/types/ReservationTypes';

import Button from '../button/Button';
import DatePicker from '../datePicker/DatePicker';
import Text from '../text/Text';
import TextInput from '../textInput/TextInput';
import { ButtonsWrapper } from './CreateReservationModal.styles';

interface CreateReservationModalProps {
  onCloseRequest: () => void;
}

// styling for mui modal
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
};

const uploadReservation = async (reservation: ReservationType) => {
  const newReservation = reservation; // We're doing this to avoid no param reasign es lint rule
  await $.ajax({
    dataType: 'json',
    success(data) {
      newReservation.customerEmail = data.results[0].email;
    },
    url: 'https://randomuser.me/api/',
  });
  const existingReservations: ReservationType[] = JSON.parse(
    localStorage.getItem('reservations') || '[]'
  ) as ReservationType[];
  existingReservations.push(newReservation);
  localStorage.setItem('reservations', JSON.stringify(existingReservations));
};

export const CreateReservationModal = ({
  onCloseRequest,
}: CreateReservationModalProps) => {
  const isVisible = useContext(CreateReservationModalVisibilityContext);

  const [newReservationName, setNewReservationName] = useState<string>('');
  const [newReservationCheckInDate, setNewReservationCheckInDate] =
    useState<string>('');

  const [newReservationsNights, setNewReservationNights] = useState<number>(1);

  const cancelReservation = (): void => {
    setNewReservationName('');
    setNewReservationCheckInDate('');
    setNewReservationNights(0);
    onCloseRequest();
  };

  return (
    <Modal open={isVisible} onClose={onCloseRequest}>
      <Box sx={modalBoxStyle}>
        <Text
          margin={`0 0 ${spacing.xxl} 0`}
          color="darkBlue"
          weight={800}
          size="lg"
        >
          Add reservation
        </Text>
        <TextInput
          alignItems="center"
          label="Full Name"
          type="text"
          hasError={false}
          placeholder="John Doe"
          icon="Person"
          value={newReservationName}
          onChange={(e) => setNewReservationName(e.target.value)}
        />
        <DatePicker
          isPhone={typeof window !== 'undefined' && window.innerWidth < 450}
          disablePast
          onChange={(newDate) => {
            setNewReservationCheckInDate(newDate?.toISOString() || '');
          }}
          value={dayjs(newReservationCheckInDate)}
        />
        <TextInput
          alignItems="center"
          label="Nights (max 15)"
          type="number"
          hasError={false}
          icon="NightsStay"
          min={1}
          max={10}
          onChange={(e) =>
            setNewReservationNights(parseInt(e.target.value, 10))
          }
          value={newReservationsNights}
        />
        <ButtonsWrapper>
          <Button
            text="Accept"
            onClick={() => {
              const checkOutDate = dayjs(newReservationCheckInDate)
                .add(newReservationsNights, 'day')
                .toISOString();
              uploadReservation({
                checkIn: newReservationCheckInDate,
                checkOut: checkOutDate,
                customerFullName: newReservationName,
              });
            }}
          />
          <Button kind="cancel" text="Cancel" onClick={cancelReservation} />
        </ButtonsWrapper>
      </Box>
    </Modal>
  );
};
