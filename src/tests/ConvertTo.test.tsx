import { render, screen } from "@testing-library/react";
import ConvertTo from "../components/ConvertTo";

test("renders ConvertTo component", () => {
  const setShow1 = jest.fn();
  const setShow2 = jest.fn();
  const setValue1 = jest.fn();
  const setValue2 = jest.fn();
  const setExchRate2 = jest.fn();

  render(
    <ConvertTo
      setExchRate2={setExchRate2}
      exchRate1={0}
      exchRate2={0}
      setValue1={setValue1}
      setValue2={setValue2}
      value2={0}
      show2={false}
      setShow1={setShow1}
      setShow2={setShow2}
    />
  );
  const linkElement = screen.getByText(/currency/i);
  expect(linkElement).toBeInTheDocument();
});
