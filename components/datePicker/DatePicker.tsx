import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  StaticDatePicker,
  StaticDatePickerProps,
} from '@mui/x-date-pickers/StaticDatePicker';
import React from 'react';

type DatePickerExtendedProps = StaticDatePickerProps<Date>;

const DatePicker = ({ ...restProps }: DatePickerExtendedProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker {...restProps} />
    </LocalizationProvider>
  );
};

export default DatePicker;
