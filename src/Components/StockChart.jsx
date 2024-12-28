/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering components to use chart js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function StockChart(props) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const FINNHUB_API_KEY = "YOUR_API_KEY";
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${FINNHUB_API_KEY}`
        );
        const res_data = await response.json();
        if (response.ok) {
          setChartData({
            labels: ["Open", "High", "Low", "Close"], // Labels for the chart
            datasets: [
              {
                label: `${props.symbol} Stock Data`,
                data: [res_data.o, res_data.h, res_data.l, res_data.c], // Mapping stock data to chart
                fill: false,
                borderColor: "#4bc0c0",
                tension: 0.1,
              },
            ],
          });
          setLoading(false);
        } else {
          setError("error while creating chart.");
        }
      } catch (e) {
        console.error(e);
        setError("Failed to fetch stock data.");
        setLoading(false);
      }
    };
    fetchStock();
  }, [props.symbol]);

  if (loading) {
    return <div>Loading chart...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <section className="stock-chart">
      <div>
        <h2>{props.symbol}</h2>
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    </section>
  );
}
