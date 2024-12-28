import { useState } from "react";
import stocks from "../stocks";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Stocks() {
  const [stocksData, setStocksData] = useState(stocks);
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (searchText === "") {
      setStocksData(stocks);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = searchText.toLowerCase();
    const newStocks = stocks.filter((stock) =>
      stock.company.toLowerCase().includes(searchQuery)
    );
    console.log(newStocks);
    setStocksData(newStocks);
  };
  return (
    <section className="stocks-section">
      <form onSubmit={handleSubmit} className="search">
        <input
          type="search"
          name="symbol"
          placeholder="Search by Company"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="table-container">
        <table className="stocks">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Exchange</th>
              <th>Currency</th>
              <th>Sector</th>
              <th>Industry</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {stocksData.length > 0 ? (
              stocksData.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td className="symbol">
                      <span>{stock.symbol}</span>
                      <NavLink
                        className="stock-sep"
                        title="View Stock >>"
                        to={`/stocks/${stock.symbol}`}
                      >
                        <BsArrowRight className="arr-right" />
                      </NavLink>
                    </td>
                    <td>{stock.company}</td>
                    <td>{stock.exchange}</td>
                    <td className="currency">{stock.currency}</td>
                    <td>{stock.sector}</td>
                    <td>{stock.industry}</td>
                    <td className="link">
                      <a href={stock.website}>{stock.website}</a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Stocks Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
