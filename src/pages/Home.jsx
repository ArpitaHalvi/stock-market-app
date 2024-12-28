import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <section className="home-section">
      <h2>
        Stay Ahead in the Market with Smart, <span> Real-Time Data. </span>
      </h2>
      <p>
        Get real-time market data, advanced analytics, and insights to make
        smarter investment decisions. Track your portfolio and grow your wealth
        with ease.
      </p>
      <NavLink to="/profile">
        GET STARTED
        <FaArrowRight />
      </NavLink>
    </section>
  );
}
