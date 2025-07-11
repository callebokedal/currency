import { useState } from 'react';

const CurrencyCalculator = () => {
    const [currencies, setCurrencies] = useState({
        SEK: 0,
        PLN: 0,
        CZK: 0,
        EUR: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrencies((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const calculateCurrencies = (baseCurrency) => {
        const rates = {
            SEK: 1, // Base currency
            PLN: 0.45,
            CZK: 0.22,
            EUR: 0.1,
        };

        const baseValue = currencies[baseCurrency];

        setCurrencies({
            SEK: baseValue,
            PLN: (baseValue * rates.PLN).toFixed(2),
            CZK: (baseValue * rates.CZK).toFixed(2),
            EUR: (baseValue * rates.EUR).toFixed(2),
        });
    };

    return (
        <div>
            <h2>Currency Calculator</h2>
            <div>
                <h5>Set Currency Values</h5>
                {Object.keys(currencies).map((currency) => (
                    <div key={currency}>
                        <label>
                            {currency}:
                            <input
                                type="number"
                                name={currency}
                                value={currencies[currency]}
                                onChange={(e) => {
                                    handleChange(e);
                                    calculateCurrencies(currency);
                                }}
                            />
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <h5>Current Values</h5>
                <ul>
                    {Object.entries(currencies).map(([currency, value]) => (
                        <li key={currency}>
                            {currency}: {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CurrencyCalculator;