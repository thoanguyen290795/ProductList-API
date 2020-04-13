import * as types from './../constant/ActionTypes';
import callAPI from './../libs/apiCaller';
export const actFetchProductsRequest = () => {
	return (dispatch) =>{
			return callAPI('products', 'GET', null).then(res=>{
				dispatch(actFetchProducts(res.data))
			})
		}
}
export const actFetchProducts = (products)=>{
	return {
		type:types.FETCH_PRODUCTS,
		products
	}
}
export const actAddProductRequest = (product) =>{
	return (dispatch) =>{
		return callAPI('products', 'POST', product).then(res=>{
			dispatch(actAddProduct(res.data));
		})
	}
	}
export const actAddProduct = (product) => {
	return {
		type : types.ADD_PRODUCT,
		product
	}
}
export const actDeteleProductRequest = (id) => {
	return (dispatch) =>{
		return callAPI(`products/${id}`, 'DELETE', null).then(res=>{
			dispatch(actDeteleProduct(id))
		})
	}
}
export const actDeteleProduct = (id) => {
	return {
		type : types.DELETE_PRODUCT,
		id
	}
}
export const actGetProductRequest = (id) =>{
return dispatch => {
	return callAPI(`products/${id}`, 'GET', null).then(res=>{
		dispatch(actGetProduct(res.data))
	})
}
}
export const actGetProduct = (product) =>{
	return {
		type: types.EDIT_PRODUCT,
		product
	}
}
export const acUpdateProductRequest = (product) => {
	return (dispatch) =>{
		return callAPI(`products/${product.id}`, 'PUT', product).then(res=>{
			dispatch(actUpdateProduct(res.data))
		})
	}
}
export const actUpdateProduct = (product) => {
	return {
		type : types.UPDATE_PRODUCT,
		product
	}
}

