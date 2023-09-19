import Card from '../cardDog/Card'; //Se importa Card para utilizarala de plantilla para las demas cards
import style from './AllCards.module.css';

export default function Cards({allDogs}) { //Characters es un arreglo de obj que contiene la info de los personajes
   return <div className={style.divCardsL}>
      {
      allDogs?.map(({ id, image, name, height, weightMin, weightMax, temperament, life_span}) => { // Colocamos las props que requiere ( son pasadas a) card para crear una card
         return ( //Siempre lleva Return
            <Card
               key={id} //Para uso interno de React para identificar cada Card
               id={id}
               image={image}
               name={name}
               height={height}
               weightMin={weightMin}
               weightMax={weightMax}
               temperament={temperament}
               life_span={life_span}
            />
         )
      })
      }
   </div>;
}