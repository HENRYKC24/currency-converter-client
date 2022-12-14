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

  const [toUseCurrencies, setToUseCurrencies] = useState(currencies);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setExchRate1(() => 1);
  }, [setExchRate1]);

  return (
    <section className="parent-from">
      <aside>
        <span className="label">Currency</span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShow1((prev) => !prev);
            setShow2(() => false);
          }}
          className="currency-card"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            const keysToWorkWith = ["ArrowDown", "Enter", "Space"];
            if (keysToWorkWith.includes(e.code)) {
              setShow1((prev) => !prev);
              setShow2(() => false);
            }
          }}
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
        <div
          onKeyDown={(e) => {
            if (e.key === "Escape" && show1) {
              setShow1((prev) => !prev);
              setShow2(() => false);
            }
          }}
          className={`dropdown ${show1 ? "show" : ""}`}
        >
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
              tabIndex={show1 ? 0 : -1}
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
                  setExchRate={setExchRate1}
                  setDefaultCurrency={setDefaultCurrency}
                  show={show1}
                  setShow={setShow1}
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
      </aside>
      <aside className="input-amount1">
        <span className="label">Amount</span>
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
                const x = (Number(e.target.value) / exchRate1) * exchRate2;
                setValue2(() => +x.toFixed(2));
              }
            }}
            type="number"
          />
          <span>{defaultCurrency?.currency}</span>
        </div>
      </aside>
    </section>
  );
};

export default ConvertFrom;
