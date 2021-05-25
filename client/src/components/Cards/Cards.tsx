
import { FiArrowUp } from 'react-icons/fi'
import './style.css'

export interface Ticker {
    ticker?:string;
    exchange: string;
    price: string;
    change: string;
    change_percent:string;
    dividend?: string;
    last_trade_time?:Date;
    yields?:string;
}

const Cards =({ticker,exchange,price,change,
    change_percent,
    dividend,
    last_trade_time,
    yields}:Ticker) =>{
    
    return (
        <div className="cardContainer">
            <div className="iconAndTitleContainer">
                <button>
                    <FiArrowUp size={17} color="#C774EE" />
                </button>
                <div className="price_company">
                    <strong>{exchange}</strong>
                    <p>{price}</p>
                </div>
            </div>
            
                <div className="wining_percent">
                    <strong><span>+</span>{change}</strong>
                    <p><span>-</span>{change_percent}</p>
                </div>
        </div>

    )
}
export default Cards
