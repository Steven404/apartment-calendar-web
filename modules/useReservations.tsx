/* eslint-disable no-alert */
import { useEffect, useState } from 'react';

import { ReservationType } from '@/types/ReservationTypes';

import { request } from './common';

const uploadReservation = async (reservation: ReservationType) => {
  const newReservation = reservation; // We're doing this to avoid no param reasign es lint rule
  const data = await request('https://randomuser.me/api/');
  newReservation.customerEmail = data?.results[0]?.email || '';
  const existingReservations: ReservationType[] = JSON.parse(
    localStorage.getItem('reservations') || '[]'
  ) as ReservationType[];
  existingReservations.push(newReservation);
  localStorage.setItem('reservations', JSON.stringify(existingReservations));

  window.alert('Your reservation has been added successfully!');
};

const useReservations = (dependency?: string | boolean | number) => {
  const [reservations, setReservations] = useState<ReservationType[]>([]);

  const deleteReservation = (reservation: ReservationType) => {
    setReservations((prevReservations) => {
      const result = prevReservations.filter((res) => res !== reservation);
      localStorage.setItem('reservations', JSON.stringify(result));
      return result;
    });
  };

  // In an application that got it's data from the backend, this would be the API call that got the existing reservations.
  useEffect(() => {
    let isDataFetched = false;

    if (!isDataFetched) {
      const result: ReservationType[] = JSON.parse(
        localStorage.getItem('reservations') || '[]'
      );
      setReservations(result);
    }

    // In a normal program with a real API call we would need a clean up function for performance reasons
    return () => {
      isDataFetched = true;
    };
  }, [dependency]);

  return { deleteReservation, reservations, uploadReservation };
};

export default useReservations;
