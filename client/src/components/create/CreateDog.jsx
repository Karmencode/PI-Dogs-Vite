import NavBar from '../navbar/NavBar'
import style from './CreateDog.module.css';

function CreateDog() {
    return (
        <div className={style.divForm}>
             <form> {/* onSubmit es un evento de la etiqueta Form por lo tanto va aquí */}
                <h2 className={style.h2Form}>CREATE YOUR DOG</h2>

                <label htmlFor="image">Image: </label>
                <input className={style.input1} type="text" name='image'/>
                <hr/>

                <label htmlFor="name">Name: </label>
                <input  className={style.input1} type="text" name='name'/>
                <hr/>

                <label htmlFor="heightMin">Height Min: </label>
                <input  className={style.input1} type="text" name='heightMin'/>
                <hr/>

                <label htmlFor="heightMax">Height Max: </label>
                <input  className={style.input1} type="text" name='heightMax'/>
                <hr/>

                <label htmlFor="temperament">Temperament: </label>
                <input  className={style.input1} type="text" name='temperament'/>
                <hr/>

                <label htmlFor="life">Life_Span: </label>
                <input  className={style.input1} type="text" name='life'/>
                <hr/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateDog;