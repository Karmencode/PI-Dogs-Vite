import { POST_DOG, GET_ALL, GET_BY_NAME, GET_DETAIL, GET_TEMPERAMENTS, GET_CLEAN, FILTER_ORIGIN, FILTER_TEMPERAMENTS, ORDER_BY_NAME, ORDER_BY_WEIGHT } from './actionTypes';



const initialState = {
    allDogs: [],
    dogFilter: [],
    dogDetail: [],
    temperaments: []
}

function reducer(state = initialState, action) {
    let aux; // Array auxiliar para guardar los perros filtrados


    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                allDogs: action.payload,
                dogFilter: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                dogFilter: action.payload
            };
        case GET_DETAIL:
            return {
                ...state,
                dogDetail: action.payload,
            };
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            };

        case ORDER_BY_NAME:

                // se crea una copia del arreglo antes de ordenarlo para mantener la inmutabilidad.
              const sortedDogFilter1 = [...state.dogFilter].sort((a, b) => {  /* a y b cada uno toma un nombre (pug, dalmata)*/
                const nameA = a.name?.toLowerCase() || ""; // Manejar valores nulos o indefinidos
                const nameB = b.name?.toLowerCase() || "";
            
                // Cuando la función de comparación devuelve 1, significa que el primer elemento (a) debería ir después del segundo elemento (b) en el ordenamiento. En otras palabras, a es considerado "mayor" que b
                if (nameA > nameB) return action.payload === "asc" ? 1 : -1;

                // Cuando la función de comparación devuelve -1, significa que el primer elemento (a) debería ir antes del segundo elemento (b) en el ordenamiento. Porque a es considerado "menor" que b
                if (nameA < nameB) return action.payload === "asc" ? -1 : 1;
                return 0;
              });
            
              return {
                ...state,
                dogFilter: sortedDogFilter1,
              };

        case ORDER_BY_WEIGHT:
            const { payload } = action; /* desestructuramos action.payload para saber si ordena por mínimo o máximo. */

            const compareFunctionMin = (a, b) => {/*  para ordenar los valores mínimos de forma ascendente */
                if (a.weightMin < b.weightMin) return -1;
                if (a.weightMin > b.weightMin) return 1;
                return 0;
            };

            const compareFunctionMax = (a, b) => { /* para ordenar los valores máximos de forma descendente. */
                if (a.weightMax > b.weightMax) return -1;
                if (a.weightMax < b.weightMax) return 1;
                return 0;
            };

            // utilizamos filter para separar los obj en dos arrays diferentes: uno contiene los objetos para cuando payload es "min" y otro para cuando payload es "max" (ambos contienen lo mismo solo se separan para ordenarlos independientemente). utilizan las funciones de comparación compareFunctionMin y compareFunctionMax para ordenar los elementos respectivamente 
            let sortedMin = [...state.dogFilter.filter(item => payload === "min")].sort(compareFunctionMin);
            let sortedMax = [...state.dogFilter.filter(item => payload === "max")].sort(compareFunctionMax);

            // Finalmente, concatenamos los dos arreglos ordenados (sortedMin y sortedMax) en un solo arreglo llamado sortedDogFilter. Esto nos da un arreglo ordenado según tus requisitos.
            const sortedDogFilter = sortedMin.concat(sortedMax);

            return {
                ...state,
                dogFilter: sortedDogFilter,
            };

        case FILTER_TEMPERAMENTS:
            const allDogsCopyTemp = [...state.allDogs]
            if (action.payload === 'all') {
                aux = allDogsCopyTemp;
            } else {
                aux = allDogsCopyTemp.filter((dog) => {
                    if (!dog.temperament) return undefined;
                    return dog.temperament.includes(action.payload);
                })
            }
            return {
                ...state,
                dogFilter: aux,
            };

        case FILTER_ORIGIN:
            const allDogsCopy = [...state.allDogs];
            let createdFiltered;
            if (action.payload === 'db') {
                createdFiltered = allDogsCopy.filter((dog) => dog.createInDb);
            } else if (action.payload === 'api') {
                createdFiltered = allDogsCopy.filter((dog) => !dog.createInDb);
            } else {
                createdFiltered = allDogsCopy;
            }

            return {
                ...state,
                dogFilter: createdFiltered,
            };

        case POST_DOG:
            return {
                ...state
            };


        case GET_CLEAN:
            return {
                ...state,
                dogDetail: action.payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;