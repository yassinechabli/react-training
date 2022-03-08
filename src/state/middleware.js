export default () => (next) => (action) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('action dispatched', action);
  }
  //do whatever you want
  return next(action);
};
