import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>PORTFOLIO</h2>
      <p>Seems like you are not a regular user. Sign Up to get started.</p>
      <NavLink to="/profile">
        Sign Up <FaArrowRight />
      </NavLink>
    </section>
  );
}
