import { combineReducers } from 'redux';
import userDataReducer from './userDataReducer';
import destinationReducer from './destinationReducer';
import dateReducer from './dateReducer'

const rootReducer = combineReducers({
    travelDate: dateReducer,
    userData: userDataReducer,
    destination: destinationReducer,

});

export default rootReducer;
