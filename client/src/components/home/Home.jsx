import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AllCards from '../AllCards/AllCards';
import NavBar from '../navbar/NavBar';
import { getDogs, getByName, getTemperaments } from '../../redux/actions';




function Home() {

    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');  /* estado local para el string */
    const allDogs = useSelector(state => state.dogFilter);


    useEffect(() => {
        window.localStorage.setItem('currentPage', 1) /* para guardar en el navegador la pag donde se encuentra el usuario */
        if (allDogs.length === 0) { /* si el estado es = 0 se despachan las actions */
            dispatch(getDogs())
            dispatch(getTemperaments())
        }
    }, [dispatch])

    // ---------------------------------TRAER RAZAS POR NOMBRE ------------------------------------------------------------

    function handleChange(event) {   
        event.preventDefault();
        setSearchString(event.target.value);
    }

    function handleSubmit(event) { 
        event.preventDefault();
        dispatch(getByName(searchString));
    }

    // -------------------------------VOLVER A OBTENER TODOS LOS  PERROS---------------------------------------------------
    function handleClick(event) {
        event.preventDefault();
        dispatch(getDogs());
    }

    return (
        <div >
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} />
            <AllCards allDogs={allDogs} />
        </div>
    )
}

export default Home;