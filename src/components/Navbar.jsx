import './Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="http://localhost:3845/assets/79bee410ff567113defb6b6a43bb0b200f2a18a6.svg" alt="Medifit Logo" />
        <span>Medifit</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="icon-btn" aria-label="Cart">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
}
