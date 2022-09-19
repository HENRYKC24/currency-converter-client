import React, { useEffect, useState } from "react";
import currencies from "../utils/currencies.json";
import CountryFlag from "./CountryFlag";
import CurrencyListItem from "./CurrencyListItem";

const ConvertFrom = ({
  show1,
  setShow1,
  setShow2,
  setExchRate1,
  exchRate1,
  exchRate2,
  setValue1,
  setValue2,
  value1,
}: {
  setExchRate1: React.Dispatch<React.SetStateAction<number>>;
  exchRate1: number;
  exchRate2: number;
  setValue1: React.Dispatch<React.SetStateAction<number>>;
  setValue2: React.Dispatch<React.SetStateAction<number>>;
  value1: number;
  show1: boolean;
  setShow1: React.Dispatch<React.SetStateAction<boolean>>;
  setShow2: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [defaultCurrency, setDefaultCurrency] = useState(() =>
    currencies.find((curr) => curr.currency === "AUD")
  );

  useEffect(() => {
    setExchRate1(() => 1);
  }, [setExchRate1]);

  return (
    <div className="parent-from">
      <div>
        Currency
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShow1((prev) => !prev);
            setShow2(() => false);
          }}
          className="currency-card"
        >
          <div className="flag-name">
            <div className="flag">
              <CountryFlag countryAlpha2Code={defaultCurrency?.countryCode} />
            </div>
            <div className="currency-name">
              <span className="alpha">{defaultCurrency?.currency}</span>
              <span className="currency-description">
                {defaultCurrency?.currencyName}
              </span>
            </div>
          </div>
          <div>
            <i
              className={`fa fa-chevron-down ${
                show1 ? "rotate-down" : "rotate-up"
              }`}
            ></i>
          </div>
        </div>
        <div className={`dropdown ${show1 ? "show" : ""}`}>
          <div onClick={(e) => e.stopPropagation()}>
            <i className="fa fa-search"></i>
            <input type="text" />
          </div>
          <div className="list">
            {currencies.map((item) => (
              <CurrencyListItem
                setValue1={setValue1}
                setValue2={setValue2}
                setExchRate={setExchRate1}
                setDefaultCurrency={setDefaultCurrency}
                setShow={setShow1}
                alphaCode={item.countryCode}
                currencyName={item.currency}
                currencyDescription={item.currencyName}
                currencySymbol={item.currencySymbol}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="input-amount1">
        <span>Amount</span>
        <div className="input">
          <span>{defaultCurrency?.currencySymbol}</span>
          <input
            value={value1.toString()}
            onChange={(e) => {
              setValue1(() => Number(e.target.value));
              const curr = defaultCurrency?.currency;
              if (curr === "AUD") {
                const x = Number(e.target.value) * exchRate2;
                setValue2(() => +x.toFixed(2));
              } else {
                const x = Number(e.target.value) / exchRate1 * exchRate2;
                setValue2(() => +x.toFixed(2));
              }
            }}
            type="number"
          />
          <span>{defaultCurrency?.currency}</span>
        </div>
      </div>
    </div>
  );
};

export default ConvertFrom;
