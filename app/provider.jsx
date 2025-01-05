import React from 'react';
import Header from './_components/Header';

const Provider = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Provider;
