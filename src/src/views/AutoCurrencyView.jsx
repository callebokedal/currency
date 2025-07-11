import React, { useState, useEffect } from 'react';

const AutoCurrencyView = () => {
    // Store conversion rates as (currency per SEK)
    const [rates, setRates] = useState({
        sek: 1,
        pln: 1 / 2.8367,   // ≈ 0.3523 PLN per SEK, 1 PLN = 2.8367 SEK
        czk: 1 / 0.4921,   // ≈ 2.0336 CZK per SEK, 1 CZK = 0.4921 SEK
        eur: 1 / 11.9997,  // ≈ 0.08333 EUR per SEK, 1 EUR = 11.9997 SEK
    });

    const [sek, setSek] = useState(100);
    const [pln, setPln] = useState(0);
    const [czk, setCzk] = useState(0);
    const [eur, setEur] = useState(0);
    const [showRates, setShowRates] = useState(false);

    const handleSekChange = (value) => {
        setSek(value);
        setPln((value * rates.pln / rates.sek).toFixed(2));
        setCzk((value * rates.czk / rates.sek).toFixed(2));
        setEur((value * rates.eur / rates.sek).toFixed(2));
    };

    const handlePlnChange = (value) => {
        setPln(value);
        setSek((value * rates.sek / rates.pln).toFixed(2));
        setCzk((value * rates.czk / rates.pln).toFixed(2));
        setEur((value * rates.eur / rates.pln).toFixed(2));
    };

    const handleCzkChange = (value) => {
        setCzk(value);
        setSek((value * rates.sek / rates.czk).toFixed(2));
        setPln((value * rates.pln / rates.czk).toFixed(2));
        setEur((value * rates.eur / rates.czk).toFixed(2));
    };

    const handleEurChange = (value) => {
        setEur(value);
        setSek((value * rates.sek / rates.eur).toFixed(2));
        setPln((value * rates.pln / rates.eur).toFixed(2));
        setCzk((value * rates.czk / rates.eur).toFixed(2));
    };

    // On mount, update conversion values using the default SEK value.
    useEffect(() => {
        handleSekChange(100);
    }, [rates]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Currency Converter</h2>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">
                        SEK:
                        <input
                            type="number"
                            className="form-control"
                            value={sek}
                            onChange={(e) => handleSekChange(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div className="col-md-6">
                    <label className="form-label">
                        PLN:
                        <input
                            type="number"
                            className="form-control"
                            value={pln}
                            onChange={(e) => handlePlnChange(Number(e.target.value))}
                        />
                    </label>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">
                        CZK:
                        <input
                            type="number"
                            className="form-control"
                            value={czk}
                            onChange={(e) => handleCzkChange(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div className="col-md-6">
                    <label className="form-label">
                        EUR:
                        <input
                            type="number"
                            className="form-control"
                            value={eur}
                            onChange={(e) => handleEurChange(Number(e.target.value))}
                        />
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <button 
                    className="btn btn-link" 
                    onClick={() => setShowRates(!showRates)}
                >
                    {showRates ? 'Hide Settings' : 'Show Settings'}
                </button>
            </div>
            {showRates && (
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Advanced Conversion Rates</h5>
                        <div className="row">
                            <div className="col-md-3">
                                <label className="form-label">SEK (fixed):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={rates.sek}
                                    disabled
                                />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">PLN (1 PLN = ? SEK):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={(1 / rates.pln).toFixed(4)}
                                    onChange={(e) => {
                                        const newValue = Number(e.target.value);
                                        if(newValue > 0) {
                                            setRates({ ...rates, pln: 1 / newValue });
                                        }
                                    }}
                                />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">CZK (1 CZK = ? SEK):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={(1 / rates.czk).toFixed(4)}
                                    onChange={(e) => {
                                        const newValue = Number(e.target.value);
                                        if(newValue > 0) {
                                            setRates({ ...rates, czk: 1 / newValue });
                                        }
                                    }}
                                />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">EUR (1 EUR = ? SEK):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={(1 / rates.eur).toFixed(4)}
                                    onChange={(e) => {
                                        const newValue = Number(e.target.value);
                                        if(newValue > 0) {
                                            setRates({ ...rates, eur: 1 / newValue });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <small className="text-muted">Editing these values will update the conversion rates used in calculations.</small>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AutoCurrencyView;
