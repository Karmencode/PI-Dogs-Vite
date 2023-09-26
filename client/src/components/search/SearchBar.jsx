import React from 'react';
import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { getByName } from '../../redux/actions';
import style from './Search.module.css';



export default function SearchBar({handleChange, handleSubmit, handleClick}) {
   // const dispatch = useDispatch();

   
   // ---------------------------------TRAER RAZAS POR NOMBRE -----------------------------------------
   // const [searchString, setSearchString] = useState('');  /* estado local para el string */

   // function handleChange(event) { /* para setear el estado local de la string */
   //    event.preventDefault();
   //    setSearchString(event.target.value);
   // }

   // function handleSubmit(event) { /* despachar la accion para modificar el estado alldogs */
   //    event.preventDefault();
   //    dispatch(getByName(searchString));
   // }
   return (
      <div>
         <form onChange={handleChange} >
            <input className={style.input} type='search' name='search' placeholder='Search breed' />
            <button className={style.buttonSearch} type='submit' onClick={handleSubmit} >
               Search {/* Cuando se necesita pasar argumentos a una funcion como arriba se hace mediante una callback */}
            </button>
            <button onClick={event =>{handleClick(event)}}>All Dogs</button>
         </form>

      </div>
   );
} 
