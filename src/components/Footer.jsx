import '../App.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">©2024 <span className="tilt-prism-footer">Athlete X</span>. All Rights Reserved.</div>
        <nav className="footer-nav">
          <ul className="footer-links">
            <li className="footer-item">
              <a href="#" className="footer-link">Contact</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
