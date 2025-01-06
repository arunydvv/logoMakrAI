import React from 'react';

const Curved = ({ children, className = '' }) => {
  return (
    <div className={`w-fit  px-3 rounded-lg border-[1px] border-zinc-300 my-2 ${className}`}>
      {children}
    </div>
  );
};

export default Curved;

