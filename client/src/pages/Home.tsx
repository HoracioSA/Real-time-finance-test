import { useState,useEffect } from 'react';
import webSocket from 'socket.io-client'
import AreaChart from '../components/AreaChart/AreaChart';
import Cards, { Ticker } from '../components/Cards/Cards'
import '../styles/home.css'
const PORT="http://localhost:4000"
export default function Home() {
    const [response, setResponse] = useState([]);
    console.log(response);
    useEffect(() => {
      const socket = webSocket (PORT);
      socket.on("ticker", data => {
        setResponse(data); 
      });
      
      return () => {
        socket.disconnect();
      }
    }, []);

    return (
        <div data-testid="html-element" id="home-container">
            <h1>Finace.Test$</h1>
            <div className="Cards">

            </div>
            <div className="ChartDetail">
                {response.map((index:Ticker)=>{    
                return<Cards key={index.ticker}
                exchange={`${index.ticker}`}
                price={`${index.price}`}
                change={`${index.change}`}
                change_percent={`${index.change_percent}`}
                dividend={`${index.dividend}`}
                />                   
                })}  
            </div>
               
                 <AreaChart/>
                          
        </div>
    )
}
