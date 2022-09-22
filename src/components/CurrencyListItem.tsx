import React from "react";
import CountryFlag from "./CountryFlag";
import currencies from "../utils/currencies.json";
import getRates from "../utils/getRates";

const CurrencyListItem = ({
  alphaCode,
  currencyName,
  currencyDescription,
  currencySymbol,
  setDefaultCurrency,
  show,
  setShow,
  setExchRate,
  setValue1,
  setValue2,
}: {
  alphaCode: string;
  currencyName: string;
  show: boolean;
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
  setExchRate: React.Dispatch<React.SetStateAction<number>>;
  setValue1: React.Dispatch<React.SetStateAction<number>>;
  setValue2: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      onClick={() => {
        const wantedCurrency = currencies.find(
          (curr) => curr.countryCode === alphaCode
        );
        setDefaultCurrency(() => wantedCurrency);
        setShow(() => false);
        getRates(
          "http://localhost:4000/api/v1/rates/",
          currencyName,
          setExchRate
        );
        setValue1(() => 0);
        setValue2(() => 0);
      }}
      className="currency-card currency-card2"
      role="button"
      tabIndex={show ? 0 : -1}
      onKeyDown={(e) => {
        const keysToWorkWith = ["Enter", "Space"];
        if (keysToWorkWith.includes(e.code)) {
          const wantedCurrency = currencies.find(
            (curr) => curr.countryCode === alphaCode
          );
          setDefaultCurrency(() => wantedCurrency);
          setShow(() => false);
          getRates(
            "http://localhost:4000/api/v1/rates/",
            currencyName,
            setExchRate
          );
          setValue1(() => 0);
          setValue2(() => 0);
        }
      }}
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
