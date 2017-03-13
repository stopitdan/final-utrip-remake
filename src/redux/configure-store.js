import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let createStoreWithMiddleware = compose(
    applyMiddleware(thunk, logger())(createStore)
)

// setting defaults for intial state, just incase.
export default function configureStore(initialState = {
    travelDate: {},
    destination: {},
    profileTitle: '',
    userData: { budget: 4, pace: 4, refinements: {}, nightlifeTypes: {}, profileSettings: {}}}) {
        return createStoreWithMiddleware(rootReducer, initialState);
}
