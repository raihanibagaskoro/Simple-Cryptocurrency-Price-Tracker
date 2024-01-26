
import '../style/Dashboard.css';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Coin from '../components/Coin';
import Chart from '../components/Chart';
import selectedCoinContext from '../store/selectedCoinContext'

const OPTION_HOUR_MINUTE = {
  hour: "2-digit",
  minute: "2-digit"
}


function Dashboard() {
  const [coins, setCoins] = useState([]);
  const ctx = useContext(selectedCoinContext);

  

  useEffect(() => {

    axios
    .get('https://api.coincap.io/v2/assets?limit=20')
    .then(res => {
      setCoins(res.data.data);
    }).catch(error => console.log(error));
  });


 

  const generateLabels = () => {
    let options = OPTION_HOUR_MINUTE;
    if (ctx.interval !== "1D") {
      options = {
        month: "short",
        day: "numeric"
      }
    }
    return ctx.history.map((item) => new Date(item.time).toLocaleDateString("en-US", options));
  }

  return (
    <div className="Dashboard">
      <Chart 
        data={ctx.history.map((item) => item.priceUsd)}
        labels={generateLabels()}
        selectedCoin={coins.find(coin => coin.id === ctx.selected_id)}
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
