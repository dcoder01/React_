import { useState } from 'react';
// import InputBox from './components/InputBox'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState({});
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (

    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg')`,
        backgroundSize: 'cover',
      }}
    >
      {/* <div className="container d-flex align-align-content-center justify-content-center"> */}
      <div className="container " style={{ maxWidth: '600px' }}>
        <div className='conatiner p-4' style={{ maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="text-center mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="mb-3">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    // </div>




  );
}

export default App
