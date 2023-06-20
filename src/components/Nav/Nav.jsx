import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link, useNavigate } from 'react-router-dom';
const Nav = ({onSearch, setAccess}) => {

   const navigate = useNavigate();
   const handleLogOut = () => {
      setAccess(false);
      navigate('/')
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

