import * as types from './../constant/ActionTypes';
import {remove,reject} from 'lodash';
let initialDefault = []
const products = (state = initialDefault,action) => {
let {product,id} = action; 
        switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]; 
        case types.ADD_PRODUCT:
            state.push(product)
            return [...state];
          case types.UPDATE_PRODUCT:
            state=reject(state,{id:product.id})
            return [...state]
        case types.DELETE_PRODUCT:
            id = action.id
            remove(state,(product)=>{
                return product.id === id
              });
            return [...state]
            default:
            return state
        }
}
export default products; 