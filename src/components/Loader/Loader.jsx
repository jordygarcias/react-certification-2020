import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => (
  <section className="loading-wrapper" data-testid="loader">
    <CircularProgress style={{ color: '#00A2FF' }} />
  </section>
);

export default Loader;
