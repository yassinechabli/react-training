export default () => (next) => (action) => {
  console.log('action dispatched', action);
  //do whatever you want
  return next(action);
};
