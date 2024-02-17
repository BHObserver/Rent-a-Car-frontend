// carReducer.js
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  DELETE_RESERVATION_SUCCESS,
} from '../actions/carActionTypes';

const initialState = {
  cars: [],
  userReservations: [],
  loading: false,
  error: '',
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: '',
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_RESERVATION_SUCCESS:
      return {
        ...state,
        userReservations: state.userReservations.filter(
          (reservation) => reservation.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default carReducer;
