import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">DevStart Mentoria</div>

        <ul className="nav-links">
          <li><a href="#" id="FAQ">FAQ</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
