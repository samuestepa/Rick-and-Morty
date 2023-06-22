import Card from '../Card/Card';
import { connect } from 'react-redux';
const Favorites = ({ myFavorites }) => { //myFavorites viene de mapStateToProps
    return (
        <div>
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