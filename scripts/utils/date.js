export function isWeekend(day) {
  let isWeekend;
  if(day === "Saturday" || day === "Sunday") {
    isWeekend = true;
  } else {
    isWeekend = false;
  }
  return isWeekend;
}