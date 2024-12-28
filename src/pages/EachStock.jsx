import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StockChart from "../Components/StockChart";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

export default function EachStock() {
  const [stock, setStock] = useState([]);
  const { symbol } = useParams();
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const FINNHUB_API_KEY = "YOUR_API_KEY";
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
        );
        const res_data = await response.json();
        if (response.ok) {
          console.log("API DATA - ", res_data);
          setStock(res_data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchStock();
  }, [symbol]);

  return (
    <section className="each-stock-section">
      <div className="stock-info">
        <h3>{symbol}</h3>
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                Latest Trading Day &quot;
                {new Date().toLocaleDateString(stock.t)} &quot;
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td className="price">{stock.c}</td>
            </tr>
            <tr>
              <td>Open</td>
              <td>{stock.o}</td>
            </tr>
            <tr>
              <td>High</td>
              <td>{stock.h}</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{stock.l}</td>
            </tr>
            <tr>
              <td>Close</td>
              <td>{stock.pc}</td>
            </tr>
            <tr>
              <td>Absolute Change</td>
              <td className={`${stock.d > 0 ? "high" : "low"}`}>{stock.d}</td>
            </tr>
            <tr>
              <td>Percent Change</td>
              <td className={`per-change ${stock.dp > 0 ? "high" : "low"}`}>
                {stock.dp}%
                {stock.dp > 0 ? <HiTrendingUp /> : <HiTrendingDown />}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <StockChart symbol={symbol} />
    </section>
  );
}
