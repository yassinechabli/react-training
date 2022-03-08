export const calculatePredictionForCurrentWeek = (count) => {
  let num = count;
  console.log('Calculating...');
  for (let i = 0; i < 1000; i++) {
    num += Math.random(15) * 5;
  }
  return num;
};
