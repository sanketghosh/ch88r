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
  formatRelative,
  getDay,
  subDays,
} from "date-fns";

export const formatDate = (providedDate: Date | string) => {
  const date = new Date(providedDate);
  const now = new Date();

  if (differenceInDays(now, date) === 0) {
    return format(date, "h:mm a");
  } else if (differenceInDays(now, date) < 3) {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = getDay(date);
    const dayName = dayNames[dayIndex];

    if (differenceInDays(now, date) === 1) {
      return "Yesterday";
    } else if (differenceInDays(now, date) === 2) {
      return "Last " + dayName;
    } else {
      return formatRelative(date, now);
    }
  } else {
    // After 3 days
    return format(date, "MMM d, yyyy");
  }
};
