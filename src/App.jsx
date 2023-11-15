import React, { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";
import SelectAndInput from "./components/SelectAndInput";

function App() {
  //useState hook
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  //custom hook using to fetch data
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const selectOptions = Object.keys(currencyInfo);

  //swap currency conversion
  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  //converting amount to toCurrency
  const convert = () => setConvertedAmount(amount * currencyInfo[toCurrency]);

  //reset default
  const reset = (e) => {
    e.preventDefault();
    setAmount(1);
    setConvertedAmount(0);
    setFromCurrency("usd");
    setToCurrency("inr");
  };

  return (
    <div className="card-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="flex flex-col gap-1 border-b mb-2">
          <SelectAndInput
            label={"From"}
            selectOptions={selectOptions}
            selectedCurrencyOption={fromCurrency}
            setCurrencyChange={setFromCurrency}
            autoFocus
            amountValue={amount}
            onAmountChange={(e) => {
              setAmount && setAmount(Number(e.target.value));
              convert();
            }}
          />

          <SelectAndInput
            label={"To"}
            selectOptions={selectOptions}
            selectedCurrencyOption={toCurrency}
            setCurrencyChange={setToCurrency}
            amountValue={convertedAmount}
            readOnly
          />
        </div>

        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="bg-blue-500 swap-btn"
            title="Swap Currency"
            onClick={swapCurrency}
          >
            Swap &#8644;
          </button>

          <input
            type="reset"
            className="bg-blue-500 reset-btn"
            value="Reset &#8635;"
            title="Reset Values"
            onClick={reset}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 convert-btn"
          title="Convert Currency"
          onClick={convert}
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
