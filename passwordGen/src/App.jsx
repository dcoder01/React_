import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  const passwordRef = useRef(null);
  //useeffect for calling passgen
  // Password generator for the useState default. useCallback, cache

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (charallowed) str += "~!@#$%^&*(){}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, charallowed, setPassword]);


  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
    alert('copied')
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, num, charallowed, passwordGenerator])

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className='text-center text-light mb-4'>Password Generator</h1>
      <div className="bg-light container col-lg-6 rounded-3 d-flex flex-column align-items-center p-4">
        <div className="input-group mb-3">
          <input
            type="text"
            value={password}
            className='form-control'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPass} className="btn btn-primary">Copy</button>
        </div>

        <div className="w-100 mb-3">
          <label className="form-label">Length: {length}</label>
          <input
            type="range"
            className="form-range"
            min="6"
            max="100"
            value={length}
            step="1"
            id="customRange"
            onChange={(e) => { setLength(e.target.value) }}
          />
        </div>

        <div className="w-100 d-flex align-items-center mb-3">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="numCheckbox"
            checked={num}
            onChange={() => {
              setNum(prev =>
                !prev
              )
            }}
          />
          <label className="form-check-label" htmlFor="numCheckbox">
            Numbers
          </label>
        </div>
        <div className="w-100 d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="charCheckbox"
            checked={charallowed}
            onChange={() => { setCharallowed(prev => !prev) }}
          />
          <label className="form-check-label" htmlFor="charCheckbox">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
