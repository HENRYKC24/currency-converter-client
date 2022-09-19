import React from "react";

const CountryFlag = ({ countryAlpha2Code }: { countryAlpha2Code: string | undefined }) => (
  <img
  className="flag"
    src={`https://flagcdn.com/48x36/${countryAlpha2Code}.png`}
    alt="country flag"
  />
);

export default CountryFlag;
