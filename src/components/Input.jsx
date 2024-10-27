import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, type }, ref) => {
  return (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <input  type={type} ref={ref} className='border p-2 rounded-sm' />
    </div>
  );
});

export default Input;
