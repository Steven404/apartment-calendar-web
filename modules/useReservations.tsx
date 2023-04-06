import { useEffect, useState } from 'react';

import { ReservationType } from '@/types/ReservationTypes';

const useReservations = (dependency: string | boolean | number) => {
  const [existingReservations, setExistingReservations] = useState<
    ReservationType[]
  >([]);
  // In an application that got it's data from the backend, this would be the API call that got the existing reservations.
  useEffect(() => {
    let isDataFetched = false;
    let apiCallDidRun = false;
    if (typeof window !== undefined && !isDataFetched) {
      apiCallDidRun = true;
      const reservations: ReservationType[] = JSON.parse(
        localStorage.getItem('reservations') || '[]'
      );
      setExistingReservations(reservations);
    }

    // In a normal program with a real API call we would need a clean up function for performance reasons
    return () => {
      if (apiCallDidRun) {
        isDataFetched = true;
      }
    };
  }, [dependency]);

  return { existingReservations };
};

export default useReservations;
