export const getActionTypes = (action) => {
  return {
    begin: `${action}_BEGIN`,
    success: `${action}_SUCCESS`,
    error: `${action}_ERROR`,
    reset: `${action}_RESET`
  };
};
