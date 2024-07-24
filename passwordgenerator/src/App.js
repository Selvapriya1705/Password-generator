import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = lowercase;

    if (includeUppercase) {
      characters += uppercase;
    }
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeSymbols) {
      characters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(characterIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="app">
      <h1>Password Generator</h1>
      <div className="settings">
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="1"
            max="128"
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div className="password-display">
        <h2>{password}</h2>
      </div>
    </div>
  );
}

export default App;