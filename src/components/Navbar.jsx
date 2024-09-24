import '../App.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Athlete X</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Log In</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
