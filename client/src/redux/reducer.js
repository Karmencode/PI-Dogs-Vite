import {GET_ALL, GET_BY_NAME} from './actionTypes';



const initialState = {
    allDogs: [],
    filteredDogs: [], /* copia para filtrar los dogs y no pisar al array original de myFavorites */
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            return { ...state, 
                allDogs: action.payload,
                 filteredDogs: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;