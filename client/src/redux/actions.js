import {GET_DOG_TEMPS, GET_ALL, GET_BY_NAME,GET_DETAIL,GET_CLEAN,GET_TEMPERAMENTS,FILTER_ORIGIN,FILTER_TEMPERAMENTS,ORDER_BY_NAME, ORDER_BY_WEIGHT, POST_DOG} from './actionTypes';
import axios from 'axios';
import Swal from 'sweetalert2';


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
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 1500
              })
            // alert(error.response.data)
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
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 1500
              })
            // alert(error.response.data)
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
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 1500
              })
            // alert(error.response.data)
        }
    }
}

export const getTemperaments =() =>{
    const endpoint= 'http://localhost:3001/temperaments';

    return async (dispatch) =>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch({
                type:GET_TEMPERAMENTS,
                payload:data,
            })
        } catch (error) {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 1500
              })
            // alert(error.message);
        }
    }
}

export const getClean =() =>{
    return{
        type: GET_CLEAN,
        payload:[]
    }
}

export const postDog =(createDog) =>{
    const endpoint= 'http://localhost:3001/dogs';

    return async (dispatch) =>{
        try {
            const posted = await axios.post(endpoint,createDog);
            console.log(posted);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: posted.data.message,
                showConfirmButton: false,
                timer: 1500
              })
            // alert(posted.data.message);
            return  dispatch ({ type:POST_DOG, payload: posted.data})
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 1500
              })
            // alert(error.response.data)
        }
    }
}

// FILTERS && ORDERS

export const filterTemperament =(temperament) =>{
    return { type: FILTER_TEMPERAMENTS, payload: temperament }
}

export const orderByName =(orden) =>{
    return { type: ORDER_BY_NAME, payload: orden }
}

export const orderByWeight =(payload) =>{
    return { type: ORDER_BY_WEIGHT, payload}
}

export const filterOrigin =(payload) =>{
    return { type: FILTER_ORIGIN, payload}
}

