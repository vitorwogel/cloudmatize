import '../styles/navbar.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}><img src={logo} alt="Logo" /></Link>
      </div>
      <div>
        <Link to={'/admin'}>ADMIN</Link>
      </div>
    </nav>
  );
};

export default Navbar;
