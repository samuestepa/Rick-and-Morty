import Card from '../Card/Card';
import style from '../../styles/Cards.css'

export default function Cards({characters, onClose}) {
   return <div>{
            characters?.map(({id, name, status, species, gender, origin, image}) => {
              return <Card 
              key = {id} 
              id = {id}
              status = {status}
              species = {species}
              gender = {gender} 
              origin = {origin.name}
              image = {image}
              name = {name}
              onClose = {onClose}
              />
            })
      }</div>;
}
