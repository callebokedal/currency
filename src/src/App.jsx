import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ManualCurrencyView from './views/ManualCurrencyView';
import AutoCurrencyView from './views/AutoCurrencyView';

const App = () => {
    return (
        <AutoCurrencyView />
    );
};

export default App;