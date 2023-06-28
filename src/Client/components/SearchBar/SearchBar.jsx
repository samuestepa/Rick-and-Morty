const SearchBar = ({onSearch}) => {
   return (
      <div className="containter">
          <input type='search'className="input" />
         <button onClick={onSearch} className="button">Agregar</button>
      </div>
   );
}

export default SearchBar;