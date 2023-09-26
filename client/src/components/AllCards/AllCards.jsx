import { useState } from 'react';
import Card from '../cardDog/Card'; //Se importa Card para utilizarala de plantilla para las demas cards
import style from './AllCards.module.css';
import Pagination from '../pagination/Pagination';

export default function Cards({ allDogs }) { //alldogs es un arreglo de obj que contiene la info de los personajes

   const [currentPage, setCurrentPage] = useState(window.localStorage.getItem('currentPage'));
   const [dogsPage, setdogsPage] = useState(8);
   const lastDog = currentPage * dogsPage;
   const firstDog = lastDog - dogsPage;

   const currentDogs = allDogs.slice(firstDog, lastDog);

   const pagination = (pageNumber) => { /* funcion para cambiar la pagina actual */ 
      setCurrentPage(pageNumber);
      window.localStorage.setItem('currentPage', pageNumber);
   }


   return (
      <div className={style.divAllCards}>
         <Pagination
            dogsPage={dogsPage}
            allDogs={allDogs.length}
            pagination={pagination}
         />

         <div className={style.divCardsL}>

            {
               currentDogs?.map(({ id, image, name, height, weightMin, weightMax, temperament, life_span }) => { // Colocamos las props que requiere ( son pasadas a) card para crear una card
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
         </div>
      </div>
   )
}