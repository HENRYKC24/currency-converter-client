import React, { useState } from "react";
import currencies from "../utils/currencies.json";
import CountryFlag from "./CountryFlag";
import CurrencyListItem from "./CurrencyListItem";

const ConvertTo = ({
  show2,
  setShow1,
  setShow2,
}: {
  show2: boolean;
  setShow1: React.Dispatch<React.SetStateAction<boolean>>;
  setShow2: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const [show, setShow] = useState(false);
  const [defaultCurrency, setDefaultCurrency] = useState(() =>
    currencies.find((curr) => curr.currency === "USD")
  );
  console.log("default", defaultCurrency);
  return (
    <div className="parent-from">
      <div>
        Currency
        <div onClick={(e) => {
          e.stopPropagation();
          setShow2((prev) => !prev);
          setShow1(() => false);
        }} className="currency-card">
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
                show2 ? "rotate-down" : "rotate-up"
              }`}
            ></i>
          </div>
        </div>
        {(show2 || true) && (
          <div className={`dropdown ${show2 ? "show" : ""}`}>
            <div onClick={(e) => e.stopPropagation()}>
              <i className="fa fa-search"></i>
              <input type="text" />
            </div>
            <div className="list">
              {currencies.map((item) => (
                <CurrencyListItem
                  setDefaultCurrency={setDefaultCurrency}
                  setShow={setShow2}
                  alphaCode={item.countryCode}
                  currencyName={item.currency}
                  currencyDescription={item.currencyName}
                  currencySymbol={item.currencySymbol}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="input-amount1">
        <span>Amount</span>
        <div className="input">
          <span>{defaultCurrency?.currencySymbol}</span>
          <input type="number" />
          <span>{defaultCurrency?.currency}</span>
        </div>
      </div>
    </div>
  );
};

export default ConvertTo;
