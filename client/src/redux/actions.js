import {GET_ALL, GET_BY_NAME} from './actionTypes';
import axios from 'axios';


export const getDogs = () => {

    const endpoint ='http://localhost:3001/dogs';
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_ALL,
                payload: data,
            });
            
        } catch (error) {
            console.log(error.message);
        }
        
    };
}
