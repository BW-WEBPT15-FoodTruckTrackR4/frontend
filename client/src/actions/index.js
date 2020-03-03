import axios  from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN FAIL';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGOUT = 'LOGOUT';

export const  APP_UPDATE = 'APP_UPDATE';

export const SET_UPDATE_USER_FLAG = 'SET_UPDATE_USER_FLAG';

export const FETCH_DINER_START = 'FETCH_DINER_START';
export const FETCH_DINER_SUCCESS = 'FETCH_DINER_SUCCES';
export const FETCH_DINER_FAIL = 'FETCH_DINER_FAIL';

export const FETCH_OPERATOR_START = 'FETCH_OPERATOR_START';
export const FETCH_OPERATOR_SUCCESS = 'FETCH_OPERATOR_SUCESS';
export const FETCH_OPERATOR_FAIL = 'FETCH_OPERATOR_FAIL';

export const UPDATE_DIENR_START = 'UPDATE_DINER_START';
export const UPDATE_DINER_SUCCESS = 'UPDATE_DINER_SUCCESS';
export const UPDATE_DINER_FAIL = 'UPDATE_DINER_FAIL';

export const UPDATE_OPERATOR_START = 'UPDATE_OPERATOR_START';
export const UPDATE_OPERATOR_SUCCESS = 'UPDATE_OPERATOR_SUCCESS';
export const UPDATE_OPERATOR_FAIL = 'UPDATE_OPERATOR_FAIL';

export const DELETE_DINER_START = 'DELETE_DINER_START';
export const DELETE_DINER_SUCCESS = 'DELETE_DINER_SUCCESS';
export const DELETE_DINER_FAIL = 'DELETE_DINER_FAIL';

export const DELETE_OPERATOR_START = 'DELETE_OPERATOR_START';
export const DELETE_OPERATOR_SUCCESS = 'DELETE_OPERATOR_SUCCESS';
export const DELETE_OPERATOR_FAIL = 'DELETE_OPERATOR_FAIL';

// login action will handlle all logins
export const login = credentials => dispatch => {
    dispatch ({ type: LOGIN_START});
    Console.log('Starting login... for: ', credentials);
    axios
        .post('https://foodtrucktrackr4.herokuapp.com/api/login', credentials)
        .then( res => {
            console.log(res);
            dispatch ({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch => {
            console.log('Login failed... for: ', err);
            dispatch ({ type: LOGIN_FAIL, payload: err.response});
        });
};

export const registerDiner = credentials => dispatch => {
    dispatch({ type: REGISTER_START });
    
    axios
    .post('https://foodtrucktrackr4.herokuapp.com/api/register/diner', credentials)
    .then(res => {
        console.log(res);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL, payload: err });
    });
};

export const registerOperator = credentials => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
    .post('https://foodtrucktrackr4.herokuapp.com/api/register/operator', credentials)
    .then(res => {
        console.log(res);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL, payload: err });
    });
};

export const getDiners = id => dispatch => {
    dispatch({ type: FETCH_DINER_START });

    axiosWithAuth()
    .get(`/diner/$[id]`)
    .then(res => {
        console.log('Get diner: ', res);
        dispatch({ type: FETCH_DINER_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err.response)
        dispatch({ type: FETCH_DINER_FAIL, payload: err});
    });
};

export const getTrucks = () => dispatch => {
    dispatch({ type: FETCH_OPERATOR_START });

    axiosWithAuth()
    .get('/trucks')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_OPERATOR_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCH_OPERATOR_FAIL, payload: err.message });
    });
};

export const setUpdatedUserFlag = flag => dispatch => {
    dispatch({ type: SET_UPDATE_USER_FLAG, payload: flag });
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};

export const deleteDiner = id => dispatch => {
    dispatch({ type: DELETE_DINER_START });

    axiosWithAuth()
    .delete(`/diner/${id}`)
    .then(res => {
        console.log(res);
        dispatch({ type: DELETE_DINER_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_DINER_FAIL, payload: err });
    });
};

export const deleteTruck = id => dispatch => {
    dispatch({ type: DELETE_OPERATOR_START });

    axiosWithAuth()
    .delete(`truck/${id}`)
    .then(res => {
        console.log(res);
        dispatch({ type: DELETE_OPERATOR_SUCCESS });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_OPERATOR_FAIL, payload: err });
    });
};

export const updateApp = () => dispatch => {
    const loggedIn = localStorage.getItem('token') ? true : false;
    const id = parseInt(localStorage.getItem('id'), 10);
    dispatch(getDiners(id));
    const updates = { loggedIn, id };
    dispatch({ type: APP_UPDATE, payload: updates });
}

export const updateDiner = (id, updateDiner) => dispatch => {
    dispatch({ type: UPDATE_DIENR_START });

    axiosWithAuth()
    .put(`diner/${id}`, {id, ...updateDiner })
    .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_DINER_SUCCESS, payload: res.data });
        setTimeout(() => {
            dispatch(setUpdatedUserFlag(false));
        }, 6000);
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: UPDATE_DINER_FAIL, payload: err.message });
    });
};

export const updateTruck = (id, updateTruck) => dispatch => {
    dispatch({ type: UPDATE_OPERATOR_START });

    axiosWithAuth()
    .put(`truck/${id}`, {id, ...updateTruck })
    .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_OPERATOR_SUCCESS, payload: res.data });
        setTimeout(() => {
            dispatch(setUpdatedUserFlag(false));
        }, 6000);
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: UPDATE_OPERATOR_FAIL, payload: err.message });
    });
};