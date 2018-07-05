import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import timersReducer from './timersReducer';

export default combineReducers({
    currency: currencyReducer,
    timers: timersReducer,
});