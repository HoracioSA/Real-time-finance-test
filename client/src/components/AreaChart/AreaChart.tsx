import webSocket from 'socket.io-client'
import { format, parseISO, subDays } from "date-fns";
import { useEffect, useState } from "react";

import { AreaChart as AreaCharts, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PORT="http://localhost:4000"
function AreaChart() {
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
        <ResponsiveContainer width="80%" height={300}>
      <AreaCharts data={response}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#855CF8" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#855CF8" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="ticker" stroke="#855CF8" fill="#855CF8" />
        <XAxis
          dataKey="exchange"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const data = parseISO(str);
            if (data.getDate() % 7 === 0) {
              return format(data, "MMM, d");
            }
            return "";
          }}
        />
        <YAxis
          dataKey="price"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />
        <Tooltip cursor={{ fill: '#1F1E29' }} />
        <CartesianGrid opacity={0.1} vertical={true} />
      </AreaCharts>
    </ResponsiveContainer>
  );
}
export default AreaChart
