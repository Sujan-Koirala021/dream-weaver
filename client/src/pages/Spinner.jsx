import React from 'react';

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
    </div>
  );
}

export default Spinner;
