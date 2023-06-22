import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const Nav = ({onSearch, setAccess}) => {
   const handleLogOut = () => {
      setAccess(false)
   }

   return (
      <nav>
         <SearchBar onSearch = { onSearch }/>
         <div>
            <Link to = '/about'> About </Link>
            <Link to = '/home'> Home </Link>
            <Link to = '/favorites'> Favorites </Link> 
         </div>
         <button onClick = {handleLogOut}>Log Out</button>
         
      </nav>
   )
}

export default Nav;

