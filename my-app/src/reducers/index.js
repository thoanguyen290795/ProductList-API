import { combineReducers } from 'redux';
import products from './products';
import itemSelected from './itemSelected'; 
const appReducers = combineReducers({
products,
itemSelected
});

export default appReducers;