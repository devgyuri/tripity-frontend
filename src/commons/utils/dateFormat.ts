export const dateToFormat = (date?: string): string => {
  if (date) {
    return date.substring(0, 10);
  } else {
    return "";
  }
};
