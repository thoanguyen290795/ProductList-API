import * as types from './../constant/ActionTypes.js';
let initialDefault = {id:'', name:'', price:'', status:''}
const itemSelected = (state = initialDefault,action) => {
	switch (action.type) {
		case types.EDIT_PRODUCT:
			return  action.product
		default:
			return state
	}
	
}
export default itemSelected; 