import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

function Nav({handleChange, handleSubmit, handleClick}){  /* VIENEN DESDE HOME */
    return(
        <nav className={style.divBar}>

        <button >
          <Link  to ='/'> Landing </Link>
          </button>

         <button>
          <Link to ='/home'> Home </Link>
          </button>
          
         <button>
          <Link to ='/create'>Create</Link>
          </button>
          {/* <button onClick={event =>{handleClick(event)}}>All Dogs</button> */}
          
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick}/>  
          
        </nav>
    )
}

export default Nav;