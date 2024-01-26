
import '../style/Dashboard.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from '../components/Coin';
import Chart from '../components/Chart';


function Dashboard() {
  const [coins, setCoins] = useState([]);
  
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
    .then(res => {
      setHistory(res.data.data);
    }).catch(error => console.log(error));

    axios
    .get('https://api.coincap.io/v2/assets?limit=20')
    .then(res => {
      setCoins(res.data.data);
    }).catch(error => console.log(error));
  });

  return (
    <div className="Dashboard">
      <Chart 
        data={coins.map(coin => coin.priceUsd)}
        labels={history.map(his => his.time)}
        selectedCoin={coins[0]?.name}
      />
      <div className='center table-headings'>
        <div className='coin-data'>
          <p className='coin-symbol'>Name</p>
          <p className='coin-symbol'>Symbol</p>
          <p className='coin-price'>Price</p>
          <p className='coin-change'>24h Change</p>
          <p className='coin-marketcap'>Market Cap</p>
        </div>
      </div>
        <div className='coin-data-display'>
          {coins.map(coin => (
            <Coin
              key={coin.id}
              nameids={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              priceUsd={coin.priceUsd}
              changePercent24Hr={coin.changePercent24Hr}
              marketCapUsd={coin.marketCapUsd}
            />
          ))}
        </div>
    </div>
  );
}

export default Dashboard;
