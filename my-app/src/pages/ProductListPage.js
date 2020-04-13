import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import callAPI from './../libs/apiCaller';
import {actFetchProductsRequest} from './../actions/index';
const axios = require('axios').default;
class ProductListPage extends Component {
componentDidMount(){
// Gọi trước khi component đc render lần đầu tiên
this.props.fetchAllPropducts()
  }
render(){
let {products} = this.props;
 return (
 <div className="container">
    <div className="col-12 col-md-12">
            <Link to ="/product/add"type="button" className="btn btn-primary mb-2">
              Thêm Sản Phẩm 
            </Link>
            <ProductList>
            {this.showProducts(products)}
            </ProductList>
        </div>
</div> 
 );
 
}
showProducts(products){
  let xhml = null; 
if (products !== null && products.length > 0){
xhml = products.map((product,index) => {
  return <ProductItem key={index + product.name + product.price} 
                      index={index} product={product}/>
})
}
return xhml
}
}
const mapStateToProps = (state) =>{
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return {
   fetchAllPropducts: ()=>{
     dispatch(actFetchProductsRequest())
   }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);