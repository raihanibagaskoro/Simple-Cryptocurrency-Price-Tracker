
import '../style/Dashboard.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from '../components/Coin';
import { useNavigate } from 'react-router-dom';


function Watchlist() {
  const [coins, setCoins] = useState([]);
  const [ids, setIds] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/');
    }
    axios
    .get('http://localhost:3001/watchlist', {
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(res => {
        const coinNames = res.data.map(coin => coin.coin_name);
        setIds(coinNames.join(','));
    }).catch(error => console.log(error));
    

    axios
    .get(`https://api.coincap.io/v2/assets?ids=${ids}`)
    .then(res => {
      setCoins(res.data.data);
    }).catch(error => console.log(error));
    
  }, [navigate, ids]);

  return (
    <div className="Dashboard">
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

export default Watchlist;
