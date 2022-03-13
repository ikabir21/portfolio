export const getCurrentTime = (date) => {
  const getCurrentDate = date.toDateString().slice(0, 10);
  const getCurrentTime = date.getHours() + ":" + date.getMinutes();
  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  return `${getCurrentDate} ${getCurrentTime}:${seconds}`;
};
