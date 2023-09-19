import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';


function Card({ id, image, name, height, weightMin, weightMax, temperament, life_span }) {
    return (
        <div className={style.divCar}>
            <img src={image} alt='dogs' />
            <h5>{id}</h5>
            <Link to={`/detail/${id}`}>
                <h3>Name:{name}</h3>  {/* Al hacer click en el nombre nos dirigira al datail del dog por su id */}
            </Link>
            {/* <h3>{height}</h3> */}
            <h3>Min.Weight: {weightMin} Kg / Max.Weight: {weightMax} Kg</h3>
            <h3>Temperament:{temperament}</h3>
            {/* <h3>{life_span}</h3> */}
        </div>
    )
}

export default Card;