import '../styles/navbar.css';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
