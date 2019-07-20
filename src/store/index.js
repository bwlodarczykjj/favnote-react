import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

/* eslint-disable no-underscore-dangle */
/* eslint no-undef: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  try {
    const userID = localStorage.getItem('userID');
    if (userID === null) {
      return undefined;
    }
    return JSON.parse(userID);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const userID = JSON.stringify(state);
    localStorage.setItem('userID', userID);
  } catch (err) {
    return undefined;
  }
  return state;
};

export const removeState = () => {
  localStorage.removeItem('userID');
  window.location = '/login';
  return initialState;
};

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    userID: store.getState().userID,
  });
});

/* eslint-enable */
export default store;
