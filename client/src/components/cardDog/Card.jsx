import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';


function Card({ id, image, name, height, weight, temperament, life_span }) {
    return (
        <div className={style.divCar}>
            <img src={image} alt='dogs' />
            <h5>{id}</h5>
            <Link to={`/detail/${id}`}>
                <h3>{name}</h3>  {/* Al hacer click en el nombre nos dirigira al datail del dog por su id */}
            </Link>
            {/* <h3>{height}</h3> */}
            <h3>{weight}</h3>
            <h3>{temperament}</h3>
            {/* <h3>{life_span}</h3> */}
        </div>
    )
}

export default Card;