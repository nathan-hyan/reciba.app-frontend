export function dateConverter(date: string | Date) {
  return date.toString().substr(0, 10);
}
