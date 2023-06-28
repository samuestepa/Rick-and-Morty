import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import style from '../../styles/Nav.css'

const Nav = ({onSearch, setAccess}) => {
   const handleLogOut = () => {
      setAccess(false)
   }

   return (
      <nav className="navContainer">
      <SearchBar onSearch={onSearch} className="searchBar" />
      <div className="navLinks">
         <Link to="/about">About</Link>
         <Link to="/home">Home</Link>
         <Link to="/favorites">Favorites</Link>
      </div>
      <button onClick={handleLogOut} className="logoutButton">
         Log Out
      </button>
   </nav>
   )
}

export default Nav;

