import { combineReducers } from 'redux';
import counterReducer from './modules/counter/reducer';
import productsListReducer from './modules/products/reducer';

export default combineReducers({
    counter: counterReducer,
    product : productsListReducer
});
