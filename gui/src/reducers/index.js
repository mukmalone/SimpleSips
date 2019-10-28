import { combineReducers } from 'redux';
import drinkReducer from './drinkReducer';

export default combineReducers({
    drink: drinkReducer
});