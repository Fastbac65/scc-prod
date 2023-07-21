import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { DatePicker } from '@mui/x-date-pickers';

// ----------------------------------------------------------------------

export default function RHFDatePicker({ name, helperText, ...other }) {
  const { control } = useFormContext();
  // label picked up in ...other for Datepicker
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...other}
          slotProps={{
            textField: {
              helperText: error?.message || helperText,
              error: !!error?.message,
            },
          }}
          {...field}
          value={field.value}
        />
      )}
    />
  );
}

RHFDatePicker.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
