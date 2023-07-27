import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------
//  date is Date or millisecs
export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}
//  date is Date or millisecs
export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}
// get millisecs timestamp from Date
export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}
//  date is Date or millisecs
export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
        includeSeconds: true,
      })
    : '';
}
