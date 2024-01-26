import {useState, createContext} from 'react';
import axios from 'axios';

const DEFAULT_INTERVAL = "1D";
const INTERVALS = {
    "1D": 1,
    "1W": 7,
    "1M": 30,
    "6M": 180,
    "1Y": 365,
}

const selectedCoinContext = createContext({});

export const SelectedCoinContext = (props) => {
    const [history, setHistory] = useState([]);
    const [selectedInterval, setSelectedInterval] = useState(DEFAULT_INTERVAL);
    const [id, setId] = useState('bitcoin');

    const getCoinHistory = async (id, interval = selectedInterval) => {
        const interval_ = interval === DEFAULT_INTERVAL ? "h2" : "d1";
        const start = new Date();
        start.setDate(start.getDate() - INTERVALS[interval]);
        const end = new Date();
        const res = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=${interval_}&start=${start.getTime()}&end=${end.getTime()}`);
        setHistory(res.data.data);
        setId(id);
        setSelectedInterval(interval);
    }

    const values = {
        history: history,
        getHistory: getCoinHistory,
        selected_id: id,
        interval: selectedInterval
    }

    return (
        <selectedCoinContext.Provider value={values}>
            {props.children}
        </selectedCoinContext.Provider>
        )
}

export default selectedCoinContext;