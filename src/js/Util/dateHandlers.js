const getPreviousDateObject = daysNumber => {
  const currentDate = getDateObject(new Date());
  const resultDate = new Date(currentDate.timeStamp - daysNumber * 24 * 60 * 60 * 1000);
  return getDateObject(resultDate);
};

const getPhaseStartDate = phaseIndex => {
  return getPreviousDateObject(6 + phaseIndex * 7);
};

const getPhaseEndDate = phaseIndex => {
  const phaseEndDate = getPreviousDateObject(phaseIndex * 7);
  phaseEndDate.timeStamp += 24 * 60 * 60 * 999;
  return phaseEndDate;
};

const getMonthName = monthIndex => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[monthIndex];
};

const getDateObject = date => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateString = `${day} ${getMonthName(month)} ${year}`;
  const timeStamp = new Date(dateString).getTime();

  return { day, month, year, dateString, timeStamp };
};
