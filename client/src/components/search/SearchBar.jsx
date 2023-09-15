import { useState } from 'react';

export default function SearchBar({onSearch}) {

    // function handleChange(evento){
    //     setId(evento.target.value); 
    //  }

   return (
      <div>
         <input type='search'placeholder='Search breed'/>
         <button>
            Agregar {/* Cuando se necesita pasar argumentos a una funcion como arriba se hace mediante una callback */}
         </button>
      </div>
   );
}
