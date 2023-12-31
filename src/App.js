   import './App.css';
import Cards from './Client/components/Cards/Cards';
import Nav from './Client/components/Nav/Nav.jsx'
import About from './Client/components/About/About';
import Deatil from './Client/components/Detail/Deatil';
import Form from './Client/components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Favorites from './Client/components/Favorites/Favorites';

const email = 'samuestepa@gmail.com';
const password = '123456';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);  
   const [access, setAccess] = useState(false);


   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')   
   }, [access]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            const char = characters.find((character) => character.id === Number(id));
            if (char){
               return alert(`Ese characters id: ${id}, ya existe`) 
            } setCharacters([data])
            } else {
            alert('¡No hay personajes con este ID!');
         }
      }) 
      .catch((error) => {
         console.log(error)
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   useEffect(() => {
      const requests = [];
      for (let num = 22; num < 24; num++) {
        requests.push(
          axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
        );
      }
      Promise.all(requests)
      .then((results) => {
         let newCharacters = [];
         results.map(
            (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
            );
            setCharacters([...newCharacters]);
            //TODO: para cuando llevemos los characters al store (state global) de redux
            // dispatch(addCharacter(newCharacters))
         })
         .catch((error) => {});
      }, []);

      
   return (
      <div className='App'>
         <div className='particles-containter'></div>
         {
            location.pathname !== '/' && <Nav onSearch = { onSearch } access = {access} setAccess = {setAccess}/>
         }
         
         <Routes>
            <Route path = '/' element = {<Form login = { login }/>}/> 
            <Route path = '/home' element = {<Cards characters={characters} onClose = { onClose }/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/home/detail/:id' element = {<Deatil/>}/>
            <Route path=    '/favorites' element = { <Favorites/>}/>
         </Routes>
      </div>
   );
}  

export default App;

