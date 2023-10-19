import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <div className={style.divMain}>
            <div className={style.divStyles}>
                <div className={style.divTextos}>
                    <h1>Do you like dogs?</h1>
                    <h2>This is the place for you</h2>
                    <h2 className={style.h2Welcome}>Welcome to my individual proyect</h2>

                    <Link to='/home'>
                        <button>Lets Go! 🐶</button>
                    </Link>
                    <div className={style.divImages}>
                        <img src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-695480884-64f8446a4e85d.jpg' alt="1" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaS0EwJ--inZ2UfnDJoxfZOdDPVFuW01v-g&usqp=CAU" alt="2" />
                        <img src="https://www.cuerpomente.com/medio/2023/06/08/perro-en-un-prado_bc5b1a31_230608141116_1280x720.jpg" alt="3" />
                        <img src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-labradoodle-with-humorous-expression-royalty-free-image-690356759-1542399719.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=1200:*" alt="4" />
                        <img src="https://www.mdzol.com/u/fotografias/m/2023/2/1/f768x1-1356722_1356849_5050.jpg" alt="5" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
