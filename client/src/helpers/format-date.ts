import { differenceInDays, format, formatRelative } from "date-fns";

export const formatDate = (providedDate: Date | string) => {
  const date = new Date(providedDate);
  const now = new Date();

  if (differenceInDays(now, date) === 0) {
    // Within 24 hours
    return format(date, "h:mm a");
  } else if (differenceInDays(now, date) < 3) {
    // Within 3 days
    return formatRelative(date, now);
  } else {
    // After 3 days
    return format(date, "MMM d, yyyy");
  }
};
