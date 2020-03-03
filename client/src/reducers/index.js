import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    FETCH_OPERATOR_START,
    FETCH_OPERATOR_SUCCESS,
    FETCH_OPERATOR_FAIL,
    FETCH_DINER_START,
    FETCH_DINER_SUCCESS,
    FETCH_DINER_FAIL,
    LOGOUT,
    APP_UPDATE,
    UPDATE_OPERATOR_START,
    UPDATE_OPERATOR_SUCCESS,
    UPDATE_OPERATOR_FAIL,
    UPDATE_DIENR_START,
    UPDATE_DINER_SUCCESS,
    UPDATE_DINER_FAIL,
    DELETE_OPERATOR_START,
    DELETE_OPERATOR_SUCCESS,
    DELETE_OPERATOR_FAIL,
    DELETE_DINER_START,
    DELETE_DINER_SUCCESS,
    DELETE_DINER_FAIL,
    SET_UPDATE_USER_FLAG
} from '../actions';

const initialState = {
    diner: {
        id: '',
        userName: '',
        password: '',
        email: '',
        currentLocation: '',
        favoriteTrucks: []
    },
    
    isFetchingDiner: false,
    fetchDinerError: '',

    isLoggingIn: false,
    loggedIn: false,
    loginError: '',

    isRegistering: false,
    registerError: '',

    isFetchingTruck: false,
    fetchTruckError: '',
    truck: {
        id: '',
        userName: '',
        password: '',
        email: '',
        trucksOwend: []
    },
    isDeleting: false,
    deleteError: '',

    isUpdatingDiner: false,
    updateDinerError: '',
    updatedDiner: false,

    isUpdatingTruck: false,
    updateTruckError: '',
    updatedTruck: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DINER_START:
            return { ...state, isFetchingDiner: true, fetchDinerError: '' };
        case FETCH_DINER_SUCCESS:
            return {
                ...state,
                isFetchingDiner: false,
                diner: {
                    ...action.payload
                }
            };
        case FETCH_DINER_FAIL: 
            return {
                ...state,
                isFetchingDiner: false,
                fetchDinerError: action.payload
            };
        case FETCH_OPERATOR_START:
            return { ...state, isFetchingTruck: true, fetchTruckError: '' };
        case FETCH_OPERATOR_SUCCESS:
            return {
                ...state,
                isFetchingTruck: false,
                truck: {
                    ...action.payload
                }
            };
        case FETCH_OPERATOR_FAIL:
            return {
                ...state,
                isFetchingTruck: false,
                fetchTruckError: action.payload
            };
        case DELETE_DINER_START:
            return {...state, isDeleting: true, deleteError: '' };
        case DELETE_DINER_SUCCESS:
            return { ...state, isDeleting: false };
        case DELETE_DINER_FAIL:
            return { ...state, isDeleting: false, deleteError: action.payload };
        case DELETE_OPERATOR_START:
            return { ...state, isDeleting: true, deleteError: '' };
        case DELETE_OPERATOR_SUCCESS:
            return { ...state, isDeleting: false };
        case DELETE_OPERATOR_FAIL:
            return { ...state, isDeleting: false, deleteError: action.payload };
        case REGISTER_START:
            return { ...state, isRegistering: true, registerError: '' };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('id', action.payload.userName.id);
            return { ...state, isRegistering: false, loggedIn: true };
        case REGISTER_FAIL:
            return { ...state, isRegistering: false, registerError: action.payload };
        case UPDATE_DIENR_START:
            return { ...state, isUpdatingDiner: true, updatedDiner: false };
        case UPDATE_DINER_SUCCESS:
            return {
                ...state,
                isUpdatingDiner: false,
                updatedDiner: true,
                diner: action.payload
            };
        case UPDATE_DINER_FAIL:
            return {
                ...state,
                isUpdatingDiner: false,
                updateDinerError: action.payload
            };
        case UPDATE_OPERATOR_START:
            return { ...state, isUpdatingTruck: true, updatedTruck: false };
        case UPDATE_OPERATOR_SUCCESS:
            return {
                ...state,
                isUpdatingTruck: false,
                updatedTruck: true,
                truck: action.payload
            };
        case UPDATE_OPERATOR_FAIL:
            return {
                ...state,
                isUpdatingTruck: false,
                updateTruckError: action.payload
            };
        case APP_UPDATE:
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
                diner: { ...state.diner, id: action.payload.id }
            };
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            return { ...state, loggedIn: false };
        case LOGIN_START:
            return { ...state, isLoggingIn: true, loginError: '' };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('id', action.payload.diner.id);
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true,
                diner: {
                    ...state.diner,
                    id: action.payload.diner.id,
                    userName: action.payload.diner.userName
                }
            };
        case SET_UPDATE_USER_FLAG:
            return { ...state, updatedDiner: action.payload };
        default:
            return state;
    }
};