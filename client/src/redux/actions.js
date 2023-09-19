import {GET_ALL, GET_BY_NAME,GET_DETAIL,GET_CLEAN,GET_TEMPERAMENTS} from './actionTypes';
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

export const getByName =(name) =>{
    const endpoint =`http://localhost:3001/dogs/?name=${name}`;
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type: GET_BY_NAME,
                payload: data,
            });
            
        } catch (error) {
            console.log(error.message);
        }
        
    };
}


export const getDetail =(id) =>{
    const endpoint= `http://localhost:3001/dogs/${id}`;

    return async (dispatch) =>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type:GET_DETAIL,
                payload:data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getClean =() =>{
    return{
        type: GET_CLEAN,
        payload:[]
    }
}
