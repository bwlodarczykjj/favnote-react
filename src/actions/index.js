import axios from 'axios';

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then(payload => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const fetchItems = itemType => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

  axios({
    method: 'get',
    url: 'http://localhost:9000/api/notes/type',
    params: {
      type: itemType,
      userID: getState().userID,
    },
    validateStatus: status => {
      return status >= 200 && status < 300; // default
    },
  })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    });
};

export const removeItem = (itemType, id) => {
  return {
    type: REMOVE_ITEM_SUCCESS,
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  return axios
    .post('http://localhost:9000/api/note', {
      userID: getState().userID,
      type: itemType,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
    });
};
