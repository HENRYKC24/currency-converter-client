import { render, screen } from "@testing-library/react";
import ConvertFrom from "../components/ConvertFrom";

test("renders ConvertFrom component", () => {
  const setShow1 = jest.fn();
  const setShow2 = jest.fn();
  const setValue1 = jest.fn();
  const setValue2 = jest.fn();
  const setExchRate1 = jest.fn();

  render(
    <ConvertFrom
      setExchRate1={setExchRate1}
      exchRate1={0}
      exchRate2={0}
      setValue1={setValue1}
      setValue2={setValue2}
      value1={0}
      show1={false}
      setShow1={setShow1}
      setShow2={setShow2}
    />
  );
  const linkElement = screen.getByText(/currency/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('class', 'label');
});
