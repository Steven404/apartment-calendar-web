import { Box, Modal } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import $ from 'jquery';
import React, { useContext, useEffect, useState } from 'react';

import { regName } from '@/modules/common';
import { CreateReservationModalVisibilityContext } from '@/pages';
import { spacing } from '@/theme';
import { ReservationType } from '@/types/ReservationTypes';

import Button from '../button/Button';
import DatePicker from '../datePicker/DatePicker';
import Text from '../text/Text';
import TextInput from '../textInput/TextInput';
import { ButtonsWrapper } from './CreateReservationModal.styles';

interface CreateReservationModalProps {
  existingReservations: ReservationType[];
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

const getUnavailableDates = (
  existingReservations: ReservationType[]
): Dayjs[] => {
  const unavailableDates: Dayjs[] = [];
  // for every reservation
  existingReservations.forEach((reservation) => {
    const reservationDates: Dayjs[] = [];
    // find for how many nights the reservation is for
    // (check the days difference between the check in and check out date)
    const nightsStayed = dayjs(reservation.checkOut).diff(
      dayjs(reservation.checkIn),
      'day'
    );
    // add every single date of the reservation to the reservationDatesArray
    for (let i = 0; i < nightsStayed; i += 1) {
      const date = dayjs(reservation.checkIn).add(i, 'day');
      reservationDates.push(date);
    }
    // finally, push the reservation dates in the unavailableDates array
    unavailableDates.push(...reservationDates);
  });
  return unavailableDates;
};

// const checkIfDatesOverlapWithExistingReservations = (
//   existingReservations: ReservationType[]
// ): boolean => {
//   return true;
// };

const uploadReservation = async (reservation: ReservationType) => {
  const newReservation = reservation; // We're doing this to avoid no param reasign es lint rule
  // make an ajax request to get a random email for the user
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

  // eslint-disable-next-line no-alert
  window.alert('Your reservation has been added successfully!');
};

export const CreateReservationModal = ({
  existingReservations,
  onCloseRequest,
}: CreateReservationModalProps) => {
  const isVisible = useContext(CreateReservationModalVisibilityContext);

  const [newReservationName, setNewReservationName] = useState<string>('');
  const [newReservationCheckInDate, setNewReservationCheckInDate] =
    useState<string>('');

  const [newReservationsNights, setNewReservationNights] = useState<number>(1);

  const [reservationNameError, setReservationNameError] = useState<
    '' | 'Please enter a valid first name'
  >('');

  const [unavailableDates, setUnavailableDates] = useState<Dayjs[]>([]);

  const cancelReservation = (): void => {
    setNewReservationName('');
    setNewReservationCheckInDate('');
    setNewReservationNights(1);
    setReservationNameError('');
    onCloseRequest();
  };

  const formHasErrors = (): boolean => {
    if (!regName.test(newReservationName)) {
      setReservationNameError('Please enter a valid first name');
      return true;
    }
    // if (checkIfDatesOverlapWithExistingReservations(existingReservations)) {
    //   return true;
    // }
    return false;
  };

  useEffect(() => {
    setUnavailableDates(getUnavailableDates(existingReservations));
  }, [existingReservations]);

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
          error={reservationNameError}
          placeholder="John Doe"
          icon="Person"
          value={newReservationName}
          onChange={(e) => {
            setNewReservationName(e.target.value);
            if (reservationNameError && regName.test(e.target.value)) {
              setReservationNameError('');
            }
          }}
        />
        <DatePicker
          isPhone={typeof window !== 'undefined' && window.innerWidth < 450}
          disablePast
          onChange={(newDate) => {
            setNewReservationCheckInDate(newDate?.toISOString() || '');
          }}
          // disable the dates that are reserved
          shouldDisableDate={(date1) =>
            unavailableDates.some((date2) => date1.isSame(date2))
          }
          value={dayjs(newReservationCheckInDate)}
        />
        <TextInput
          alignItems="center"
          label="Nights (max 15)"
          type="number"
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
              if (!formHasErrors()) {
                const checkOutDate = dayjs(newReservationCheckInDate)
                  .add(newReservationsNights, 'day')
                  .toISOString();
                uploadReservation({
                  checkIn: newReservationCheckInDate,
                  checkOut: checkOutDate,
                  customerFullName: newReservationName,
                });
                onCloseRequest();
              }
            }}
          />
          <Button kind="cancel" text="Cancel" onClick={cancelReservation} />
        </ButtonsWrapper>
      </Box>
    </Modal>
  );
};
