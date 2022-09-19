import React from "react";
import CountryFlag from "./CountryFlag";
import currencies from "../utils/currencies.json";

const CurrencyListItem = ({
  alphaCode,
  currencyName,
  currencyDescription,
  currencySymbol,
  setDefaultCurrency,
  setShow,
}: {
  alphaCode: string;
  currencyName: string;
  currencyDescription: string;
  currencySymbol: string;
  setDefaultCurrency: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          countryCode: string;
          currency: string;
          currencySymbol: string;
          currencyName: string;
        }
      | undefined
    >
  >;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => {
        const wantedCurrency = currencies.find(
          (curr) => curr.countryCode === alphaCode
        );
        setDefaultCurrency(() => wantedCurrency);
        setShow(() => false);
      }}
      className="currency-card currency-card2"
    >
      <div className="flag-name">
        <div className="flag">
          <CountryFlag countryAlpha2Code={alphaCode} />
        </div>
        <div className="currency-name">
          <span className="alpha">{currencyName}</span>
          <span className="currency-description">{currencyDescription}</span>
        </div>
      </div>
      <div>
        <i className="fa">{currencySymbol}</i>
      </div>
    </div>
  );
};

export default CurrencyListItem;
