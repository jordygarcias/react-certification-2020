import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => (
  <section className="loading-wrapper">
    <CircularProgress style={{ color: '#00A2FF' }} />
  </section>
);

export default Loader;
