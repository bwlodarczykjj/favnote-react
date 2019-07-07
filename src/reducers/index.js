import {
  // REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  ADD_ITEM,
  // AUTH_REQUEST,
  AUTH_SUCCESS,
  // AUTH_FAILURE,
  // FETCH_REQUEST,
  FETCH_SUCCESS,
  // FETCH_FAILURE,
} from 'actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,
        // Tworze dynamiczny klucz, ktory pozwala nam na dodanie go do nowej tablicy
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          // eslint-disable-next-line no-underscore-dangle
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
