import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span>Medifit</span>
          <span className="footer-contact">1640 Parker Rd. Allentown, New Mexico 31134</span>
          <span className="footer-contact">hello@gmail.com | (209) 555-0104</span>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-copy">Design By Webestica, Powered By Webflow</div>
    </footer>
  );
}
