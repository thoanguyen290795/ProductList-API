import React, {Component} from 'react';
import { connect } from 'react-redux';


 class ProductList extends Component {
render(){
  let {products}=this.props;
  return (
    <div className="card">
    <div className="card-body">
      <h4 className="card-title">Danh sách sản phẩm</h4>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>MÃ SP</th>
            <th>TÊN</th>
            <th>GIÁ</th>
            <th>TRẠNG THÁI</th>
          </tr>
        </thead>
        <tbody>
        {this.props.children}
        </tbody>
      </table>
    </div>
  </div>
  );
}


}



export default ProductList;


