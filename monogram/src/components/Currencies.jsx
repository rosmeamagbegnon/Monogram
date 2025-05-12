import React, { useState } from 'react';

const Currencies = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('JPY');

  const currencies = ['USD', 'CAD', 'EUR', 'AUD', 'GBP', 'KRW', 'JPY'];

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      
      <select className='select bg-[#1a2456] hover:text-[#bfc2d0] items-center'
        id="currency-select"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currencies;
