import React, { useState } from 'react';

const ManualCurrencyView = () => {
    const [currencies, setCurrencies] = useState({
        SEK: '',
        PLN: '',
        CZK: '',
        EUR: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrencies({
            ...currencies,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Currency values submitted:', currencies);
        // Here you can add logic to save the currency values
    };

    return (
        <div>
            <h2>Manual Currency Values</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        SEK:
                        <input
                            type="number"
                            name="SEK"
                            value={currencies.SEK}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        PLN:
                        <input
                            type="number"
                            name="PLN"
                            value={currencies.PLN}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        CZK:
                        <input
                            type="number"
                            name="CZK"
                            value={currencies.CZK}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        EUR:
                        <input
                            type="number"
                            name="EUR"
                            value={currencies.EUR}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Save Values</button>
            </form>
        </div>
    );
};

export default ManualCurrencyView;