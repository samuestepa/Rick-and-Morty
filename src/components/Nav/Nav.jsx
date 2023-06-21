import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const Nav = ({onSearch, setAccess}) => {
   const handleLogOut = () => {
      setAccess(false)
   }

   return (
      <div>
         <SearchBar onSearch = { onSearch }/>
         <button>
            <Link to = '/about'>About</Link>
         </button>
         <button>
            <Link to = '/home'>Home</Link>
         </button>
         <button onClick = {handleLogOut}>Log Out</button>
      </div>
   )
}

export default Nav;

