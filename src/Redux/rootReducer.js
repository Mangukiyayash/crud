import {combineReducers} from 'redux';
import cartReducer from './Reducers';

const rootReducer =combineReducers({
    cart : cartReducer
});

export default rootReducer;