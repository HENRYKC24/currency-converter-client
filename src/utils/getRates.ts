import React from 'react';

const getRates = async (url: string, currency: string, func: React.Dispatch<React.SetStateAction<number>>) => {
  const data = await fetch(`${url}${currency}`);
  const result = await data.json();
  func(() => result.rates[currency]);
};

export default getRates;