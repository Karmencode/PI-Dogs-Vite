import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <div className={style.divMain}>
            <div className={style.divText}>
                <h1>Do you like dogs?</h1>
                <h2>This is the place for you</h2>

                <Link to='/home'>
                    <button>Lets Go!</button>
                </Link>
            </div>
            <div className={style.divImage}>
            </div>
        </div>
    )
}

export default Landing;
{/* <div className={style.contenedorA}></div> */ }
