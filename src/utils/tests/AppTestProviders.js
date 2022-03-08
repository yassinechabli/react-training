import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'state/store';

const AppTestProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

AppTestProviders.propTypes = {
  children: PropTypes.any
};
export default AppTestProviders;
