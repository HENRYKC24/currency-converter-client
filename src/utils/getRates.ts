import React from 'react';
import axios from 'axios';

const getRates = async (url: string, currency: string, func: React.Dispatch<React.SetStateAction<number>>) => {
  try {
    const response = await axios.get(`${url}${currency}`);
    const result = response.data;
    if (process.env.NODE_ENV !== 'test') func(() => result.rates[currency]);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getRates;