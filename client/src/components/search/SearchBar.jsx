import React from 'react';
import style from './Search.module.css';



export default function SearchBar({handleChange, handleSubmit, handleClick}) {

   return (
      <div>
         <form onChange={handleChange} >
            <input className={style.input} type='search' name='search' placeholder='Search breed' />
            <button className={style.buttonSearch} type='submit' onClick={handleSubmit} >
               Search
            </button>
            <button onClick={event =>{handleClick(event)}}>All Dogs</button>
         </form>

      </div>
   );
} 
