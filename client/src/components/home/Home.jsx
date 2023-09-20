import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AllCards from '../AllCards/AllCards';
import NavBar from '../navbar/NavBar';
import {getDogs, getByName, getTemperaments} from '../../redux/actions';




function Home() {
    const dispatch = useDispatch();
    
    // ----------------------------------TRAER TODOS LOS DOGS----------------------------------------

    // 2. Hook useSelector  es la subscripcion a la store para traerme al subestado alldogs que ya se encuentra modificado por la action prev despachada.
    const allDogs = useSelector(state => state.dogFilter)

    // 1.Cuando se monte el componente despacaha la action para obteer todos los dogs y guardarlos en la store.
    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [dispatch])
// ----------------------------------------------------------------------------------
    
// ---------------------------------TRAER RAZAS POR NOMBRE -----------------------------------------
const [searchString, setSearchString] = useState('');  /* estado local para el string */

function handleChange(event) { /* para setear el estado local de la string */
   event.preventDefault();
   setSearchString(event.target.value);
}

function handleSubmit(event) { /* despachar la accion para modificar el estado alldogs */
   event.preventDefault();
   dispatch(getByName(searchString));
}
// -------------------------------VOLVER A OBTENER TODOS LOS  PERROS------------------------------------------------------------------
function handleClick (event){
    event.preventDefault();
    dispatch(getDogs());
    // window.location.reload(false);
}

return (
        <div >
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick}/>
            {/* <button onClick={event =>{handleClick(event)}}>All dogs</button> */}
            <AllCards allDogs={allDogs} />

        </div>
    )
}

export default Home;