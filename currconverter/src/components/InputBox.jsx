import React, {useId} from 'react';
// import { Form, InputGroup, FormControl, DropdownButton, Dropdown, Button, Card } from 'react-bootstrap';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  
}) {

  const amountInputId= useId();
  return (
    <div className="container mt-5">
      <div className="container card d-flex  justify-content-center" style={{ width: "100%"  }}>
        <div className="card-body">
       
          <div>
            <label htmlFor={amountInputId} className="text-muted mb-2 d-inline-block">
              {label}
            </label>
            <div className="input-group">

              <input
                id={amountInputId}
                type="number"
                // step="0"
                className="form-control"
                placeholder='Amount'
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />

            </div>
          </div>
            <p className="text-muted mb-2 w-100">Currency Type</p>
          <div className="d-flex flex-wrap justify-content-end text-right" style={{width:"100px"}}>
            <select
              className="form-select rounded-lg px-1 py-1 bg-gray-100 cursor-pointer"
              value={selectCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </div>

  );
}

export default InputBox;
