import '../style/Coin.css';
import axios from 'axios';
import React, {useEffect, useState} from "react";

const Coin = ({
    nameids,
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    marketCapUsd
}) => {
    const formattedPrice = Number(priceUsd).toFixed(2);
    const formattedChange = Number(changePercent24Hr).toFixed(2);
    const formattedMarketCap = Number(marketCapUsd).toLocaleString();

    const access_token = localStorage.getItem('access_token');

    const [watchlist, setWatchlist] = useState([]);
    const [watchlistIds, setWatchlistIds] = useState([]);

    const handleRemove = () => {
        const id = watchlistIds.find(coin => coin.coin_name === nameids).id;
        axios
        .delete(`http://localhost:3001/deleteList/${id}`, {
            headers: {
                access_token: access_token
            }
        })
        .then(res => {
            console.log(res);
        }).catch(error => console.log(error));
    };

    const handleAdd = () => {
        axios
        .post('http://localhost:3001/addList', {
            coin_name: nameids
        }, {
            headers: {
                access_token: access_token
            }
        })
        .then(res => {
            console.log(res);
        }).catch(error => console.log(error));
    };

    useEffect(() => {
        if(access_token) {
            axios
            .get('http://localhost:3001/watchlist', {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(res => {
                const coinNames = res.data.map(coin => coin.coin_name);
                
                setWatchlistIds(res.data);
                setWatchlist(coinNames);
            }).catch(error => console.log(error));
        }
    }
    );

    return (
        <div>
            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">${formattedPrice}</p>
                        {formattedChange < 0 ? (
                            <p className="coin-percent red">{formattedChange}%</p>
                        ) : (
                            <p className="coin-percent green">{formattedChange}%</p>
                        )}
                        <p className="coin-marketcap">${formattedMarketCap}</p>
                    </div>
                    {access_token && (
                        <div className="btn-watchlist">
                            {watchlist.includes(nameids) ? (
                                <button className="btn red" onClick={handleRemove}>Remove from Watchlist</button>
                            ) : (
                                <button className="btn green" onClick={handleAdd}>Add to Watchlist</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Coin