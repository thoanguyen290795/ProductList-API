
import React, {Component} from 'react';
import {actDeteleProductRequest} from './../actions/index'; 
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
 class ProductItem extends Component {
  onDelete(id) {
if(confirm(`Are you sure to delete?`)){ //eslint-disable-line
  this.props.onDelete(id);
}}
render(){
  let {product,index} = this.props;
  let statusName = (product.status)?'Còn Hàng': 'Hết Hàng rồi nha';
  let statusClass = (product.status)? 'success':'warning'; 
  return (
          <tr>
            <td>{index+1}</td>
  <td>{product.id}</td>
  <td>{product.name}</td>
  <td>{product.price}</td>
            <td>
  <span className={`badge badge-${statusClass}`}>{statusName}</span>
            </td>
            <td>
              <Link  to={`/product/${product.id}/edit`} type="button" className="btn btn-primary mr-3">Sửa</Link>
              <button onClick={()=>this.onDelete(product.id)}  type="button" className="btn btn-danger">Xoá</button>
            </td>
          </tr>
  );
}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return { 
    onDelete: (id) => {
      dispatch(actDeteleProductRequest(id))
    }
   
   }
 }
 

export default connect(null,mapDispatchToProps)(ProductItem);


