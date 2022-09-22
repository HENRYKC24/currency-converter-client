import { render, screen } from "@testing-library/react";
import CurrencyListItem from "../components/CurrencyListItem";

test("renders CurrencyListItem component", () => {
  const setDefaultCurrency = jest.fn();
  const setShow2 = jest.fn();
  const setValue1 = jest.fn();
  const setValue2 = jest.fn();
  const setExchRate = jest.fn();

  render(
    <CurrencyListItem
      setDefaultCurrency={setDefaultCurrency}
      alphaCode={"us"}
      currencyName={"USD"}
      setValue1={setValue1}
      setValue2={setValue2}
      setExchRate={setExchRate}
      currencySymbol={"$"}
      currencyDescription={"United States Dollars"}
      show={false}
      setShow={setShow2}
    />
  );
  const linkElement = screen.getByText(/USD/i);
  expect(linkElement).toBeInTheDocument();
});
