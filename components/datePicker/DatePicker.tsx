import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  StaticDatePicker,
  StaticDatePickerProps,
} from '@mui/x-date-pickers/StaticDatePicker';
import { Dayjs } from 'dayjs';
import React from 'react';

import { colors, spacing } from '@/theme';

// Extend the props from StaticDatePicker. The Dayjs package is required
type DatePickerExtendedProps = StaticDatePickerProps<Dayjs> & {
  isPhone?: boolean;
};

const DatePicker = ({ isPhone, ...restProps }: DatePickerExtendedProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isPhone ? (
        <MUIDatePicker
          sx={{
            color: colors.darkBlue,
            marginBottom: spacing.md,
            marginTop: spacing.lg,
            width: 250,
          }}
          {...restProps}
        />
      ) : (
        <StaticDatePicker sx={{ color: colors.darkBlue }} {...restProps} />
      )}
    </LocalizationProvider>
  );
};

export default DatePicker;
