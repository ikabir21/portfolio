export const getCurrentTime = (date) => {
  const getCurrentDate = date.toDateString().slice(0, 10);
  const getCurrentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return `${getCurrentDate} ${getCurrentTime}`;
};
