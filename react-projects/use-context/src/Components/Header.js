import React from 'react';
import { useMyContext } from '../Provider';

export const Header = () => {
  const { value, setValue } = useMyContext();
  return (
    <header>
      <h1>Header</h1>
      <div>
        <p>{value}</p>
        <button onClick={() => setValue('Updated!')}>Change</button>
      </div>
    </header>
  );
};
