import { useEffect, useState } from 'react';

import { ReservationType } from '@/types/ReservationTypes';

const useReservations = (dependency: string | boolean | number) => {
  const [existingReservations, setExistingReservations] = useState<
    ReservationType[]
  >([]);
  // In an application that got it's data from the backend, this would be the API call that got the existing reservations.
  useEffect(() => {
    let isDataFetched = false;

    if (!isDataFetched) {
      const reservations: ReservationType[] = JSON.parse(
        localStorage.getItem('reservations') || '[]'
      );
      setExistingReservations(reservations);
    }

    // In a normal program with a real API call we would need a clean up function for performance reasons
    return () => {
      isDataFetched = true;
    };
  }, [dependency]);

  return { existingReservations };
};

export default useReservations;
