import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';

function Nav({onSearch}){
    return(
        <nav >

        <button >
          <Link  to ='/'> Start </Link>
          </button>

         <button>
          <Link to ='/home'> Home </Link>
          </button>
          
         <button>
          <Link to ='/create'>Create</Link>
          </button>
          

          <SearchBar/>  
          
        </nav>
    )
}

export default Nav;