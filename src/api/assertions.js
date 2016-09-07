export const drinkAll = (drinkFn, what) => {
  if (what !== 'octopus') {
    drinkFn(what);
  }
};