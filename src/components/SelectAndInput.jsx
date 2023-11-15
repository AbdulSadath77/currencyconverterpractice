import React, { useId } from "react";

function SelectAndInput({
  label,
  selectOptions,
  selectedCurrencyOption,
  setCurrencyChange,
  autoFocus = false,
  readOnly = false,
  amountValue,
  onAmountChange = undefined,
}) {
  const selectElemId = useId();
  return (
    <div className="w-full flex flex-col">
      <div className="flex item-start">
        <label htmlFor={selectElemId} className="text-xl text-gray-500 grow">
          {label}
        </label>
        <select
          id={selectElemId}
          className="w-fit self-end mb-2 p-2 bg-slate-200 rounded-md cursor-pointer uppercase"
          value={selectedCurrencyOption}
          onChange={(e) => setCurrencyChange(e.target.value)}
        >
          {selectOptions.map((currencyOfCountry) => (
            <option key={currencyOfCountry} value={currencyOfCountry}>
              {currencyOfCountry}
            </option>
          ))}
        </select>
      </div>

      <input
        type="number"
        className="w-full text-5xl font-semibold outline-none"
        autoFocus={autoFocus}
        readOnly={readOnly}
        value={amountValue}
        onChange={onAmountChange}
      />
    </div>
  );
}

export default SelectAndInput;
