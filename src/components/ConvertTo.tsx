import React, { useEffect, useState } from "react";
import currencies from "../utils/currencies.json";
import getRates from "../utils/getRates";
import CountryFlag from "./CountryFlag";
import CurrencyListItem from "./CurrencyListItem";

const ConvertTo = ({
  show2,
  setShow1,
  setShow2,
  setExchRate2,
  exchRate1,
  exchRate2,
  setValue1,
  setValue2,
  value2,
}: {
  setExchRate2: React.Dispatch<React.SetStateAction<number>>;
  exchRate1: number;
  exchRate2: number;
  setValue1: React.Dispatch<React.SetStateAction<number>>;
  setValue2: React.Dispatch<React.SetStateAction<number>>;
  value2: number;
  show2: boolean;
  setShow1: React.Dispatch<React.SetStateAction<boolean>>;
  setShow2: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [defaultCurrency, setDefaultCurrency] = useState(() =>
    currencies.find((curr) => curr.currency === "USD")
  );

  const [toUseCurrencies, setToUseCurrencies] = useState(currencies);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRates("http://localhost:4000/api/v1/rates/", "USD", setExchRate2);
  }, [setExchRate2]);

  return (
    <div className="parent-from">
      <div>
        Currency
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShow2((prev) => !prev);
            setShow1(() => false);
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
                show2 ? "rotate-down" : "rotate-up"
              }`}
            ></i>
          </div>
        </div>
        <div className={`dropdown ${show2 ? "show" : ""}`}>
          <div onClick={(e) => e.stopPropagation()}>
            <i className="fa fa-search"></i>
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(() => e.target.value);
                setToUseCurrencies(() =>
                  currencies.filter(
                    (el) =>
                      el.currency
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                      el.currencyName
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                  )
                );
              }}
              type="text"
            />
          </div>
          <div className="list">
            {toUseCurrencies.length !== 0 ? (
              toUseCurrencies.map((item) => (
                <CurrencyListItem
                  key={item.id}
                  setValue1={setValue1}
                  setValue2={setValue2}
                  setExchRate={setExchRate2}
                  setDefaultCurrency={setDefaultCurrency}
                  setShow={setShow2}
                  alphaCode={item.countryCode}
                  currencyName={item.currency}
                  currencyDescription={item.currencyName}
                  currencySymbol={item.currencySymbol}
                />
              ))
            ) : (
              <p className="no-match">No Match Found</p>
            )}
          </div>
        </div>
      </div>
      <div className="input-amount1">
        <span>Amount</span>
        <div className="input">
          <span>{defaultCurrency?.currencySymbol}</span>
          <input
            value={value2.toString()}
            onChange={(e) => {
              setValue2(() => Number(e.target.value));
              const curr = defaultCurrency?.currency;
              if (curr === "AUD") {
                const x = Number(e.target.value) * exchRate1;
                setValue1(() => +x.toFixed(2));
              } else {
                const x = (Number(e.target.value) / exchRate2) * exchRate1;
                setValue1(() => +x.toFixed(2));
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

export default ConvertTo;
