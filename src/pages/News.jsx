import { useEffect, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const FINNHUB_API_KEY = "YOUR_API_KEY";
        const response = await fetch(
          `https://finnhub.io/api/v1/news?category=stock&token=${FINNHUB_API_KEY}`
        );
        const res_data = await response.json();
        console.log("News - ", res_data);
        const limitedNews = res_data.slice(0, 25);
        if (response.ok) {
          setNews(limitedNews);
        } else {
          setError("Failed to fetch news!");
        }
      } catch (e) {
        console.error(e);
        setError("Error occured.");
      }
    };
    fetchNews();
  }, []);
  if (error) {
    return alert(error);
  }
  if (!news) {
    return <div>News cannot be found!</div>;
  }
  return (
    <section className="news-section">
      <div className="tagline">
        <h2>Navigate the Market with Up-to-the-Minute News</h2>
        <h4>
          <span>Latest Trends</span> <AiOutlineRise className="trends-icon" />
        </h4>
      </div>
      <div className="news-container">
        <div className="all-news">
          {news.map((news, index) => {
            return (
              <div className="news" key={index}>
                <h3>{news.headline}</h3>
                <p>
                  <span>Source: {news.source}</span>
                  <span>
                    Updated at: {new Date().toDateString(news.datetime)}
                  </span>
                </p>
                <p className="news-link">
                  <span>Read - </span>
                  <a href={news.url}>
                    <FaExternalLinkAlt />
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
