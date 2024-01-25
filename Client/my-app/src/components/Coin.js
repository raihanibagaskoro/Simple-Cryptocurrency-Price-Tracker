import React from "react";
import '../style/Coin.css';

const Coin = ({
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    marketCapUsd
}) => {
    const formattedPrice = Number(priceUsd).toFixed(2);
    const formattedChange = Number(changePercent24Hr).toFixed(2);
    const formattedMarketCap = Number(marketCapUsd).toLocaleString();

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
                </div>
            </div>
        </div>
    )
}

export default Coin