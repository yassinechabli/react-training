const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getWeekDates = () => {
  const curr = new Date();
  const week = [];
  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first));
    week.push({
      dayName: days[day.getDay()],
      date: day.toLocaleString('fr-fr', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
    });
  }
  return week;
};
