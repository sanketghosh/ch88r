/* import { differenceInDays, format, formatRelative } from "date-fns";

export const formatDate = (providedDate: Date | string) => {
  const date = new Date(providedDate);
  const now = new Date();

  if (differenceInDays(now, date) === 0) {
    return format(date, "h:mm a");
  } else if (differenceInDays(now, date) < 3) {
    return formatRelative(date, now);
  } else {
    // After 3 days
    return format(date, "MMM d, yyyy");
  }
};
 */

import {
  differenceInDays,
  format,
  getDay,
  isToday,
  isYesterday,
} from "date-fns";

export const formatDate = (providedDate: Date | string) => {
  const date = new Date(providedDate);
  const now = new Date();

  // Check if the date is today
  if (isToday(date)) {
    return format(date, "h:mm a");
  }

  // Check if the date is yesterday
  if (isYesterday(date)) {
    return "Yesterday";
  }

  const daysDifference = differenceInDays(now, date);

  if (daysDifference <= 3) {
    return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
  } else {
    // For dates older than 3 days, format as "DD/MM/YYYY"
    return format(date, "dd/MM/yyyy");
  }
};
