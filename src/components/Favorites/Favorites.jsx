import Card from '../Card/Card';
import { connect } from 'react-redux';
import { useState } from 'react'
import { filterCards, orderCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Favorites = ({ myFavorites }) => { //myFavorites viene de mapStateToProps

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
          setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value= 'A'>Ascendente</option>
                <option value= 'B'>Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value='allCharacters'>All Characters</option>
            </select>
        {
            myFavorites?.map(fav => { //esto (?) se llama condicional feinder, para que no rompa el código 
                return(
                    <Card
                    key= {fav.id}
                    id= {fav.id}
                    name= {fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => { //siempre recibe state de manera automatica por parámetro 
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);