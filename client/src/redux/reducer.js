import { GET_ALL, GET_BY_NAME, GET_DETAIL, GET_TEMPERAMENTS, GET_CLEAN } from './actionTypes';



const initialState = {
    allDogs: [],
    copyDogs: [],/* copia para filtrar los dogs y no pisar al array original de myFavorites */
    dogFilter: [], 
    dogDetail:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                allDogs: action.payload,
                copyDogs: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                allDogs: action.payload,
            };
        case GET_DETAIL:
            return {
                ...state,
                dogDetail: action.payload,
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