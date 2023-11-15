import { useState, useEffect } from "react";
export default function useCurrencyInfo(currencyType) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyType}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currencyType]));
  }, [currencyType]);
  // console.log(data);
  return data;
}
