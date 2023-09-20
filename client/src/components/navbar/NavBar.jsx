import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { orderByName, orderByWeight, filterOrigin, filterTemperament } from '../../redux/actions';

function Nav({ handleChange, handleSubmit, handleClick }) {  /* VIENEN DESDE HOME */

  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments)
  const [order, setOrder] = useState("");  /*  para guardar el tipo de orden a filtrar */


  function handleFiltTemp(event) {
    event.preventDefault();
    dispatch(filterTemperament(event.target.value));
    setOrder(event.target.value);
  }

  function handleOrderName(event) {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setOrder(event.target.value);
  }

  function handleOrderWeight(event) {
    event.preventDefault();
    dispatch(orderByWeight(event.target.value));
    setOrder(event.target.value);
  }

  function handleFiltOrigin(event) {
    event.preventDefault();
    dispatch(filterOrigin(event.target.value));
    setOrder(event.target.value);
  }


  return (
    <nav className={style.divBar}>
{/* -----------------------------------------Filtros y ordenamientos----------------------------------------------------------- */}

      <select defaultValue="CREATED" onChange={(event) => handleFiltOrigin(event)}>
        <option value="CREATED" disabled>Filter Origin </option>
        <option value="all">All</option>
        <option value="api">Api</option>
        <option value="db">DB</option>
      </select>

      <select defaultValue="TEMP" onChange={(event) => handleFiltTemp(event)}>
        <option value= "TEMP" disabled>Filter Temperaments </option>
        <option value="all">All</option>
        {temperaments.map((temp) => (
          <option key={temp.id} value={temp.name}>
            {""}
            {temp.name}
          </option>
        )
        )}
      </select>

      <select defaultValue="ALP" onChange={(event) => handleOrderName(event)}>
        <option value ="ALP" disabled>Order by Name</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select defaultValue="WEIGHT" onChange={(event) => handleOrderWeight(event)}>
        <option value= "WEIGHT" disabled>Order by Weight</option>
        <option value="min">Weight Min</option>
        <option value="max">Weight Max</option>
      </select>


      {/* --------------------------------------------------------------------------------- */}

      <button >
        <Link to='/'> Landing </Link>
      </button>

      <button>
        <Link to='/home'> Home </Link>
      </button>

      <button>
        <Link to='/create'>Create</Link>
      </button>

      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} />

    </nav>
  )
}

export default Nav;