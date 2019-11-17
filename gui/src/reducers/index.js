import { combineReducers } from 'redux';
import drinkReducer from './drinkReducer';
import scanQRCode from './scanQRCode';

export default combineReducers({
    drink: drinkReducer,
    user: scanQRCode
});