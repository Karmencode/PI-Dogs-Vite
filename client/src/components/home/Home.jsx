import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AllCards from '../AllCards/AllCards';
import NavBar from '../navbar/NavBar';
import {getDogs} from '../../redux/actions';




function Home() {

    const dispatch = useDispatch();
    // 2. Hook useSelector  es la subscripcion a la store para traerme al subestado alldogs que ya se encuentra modificado por la action prev despachada.
    const allDogs = useSelector(state => state.allDogs)

    // 1.Cuando se monte el componente despacaha la action para obteer todos los dogs y guardarlos en la store.
    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

    return (
        <div >
            <h3>hola es la home</h3>
            <NavBar />
            <AllCards allDogs={allDogs} />

        </div>
    )
}

export default Home;