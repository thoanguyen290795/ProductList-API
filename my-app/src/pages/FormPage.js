import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import {actAddProductRequest,acUpdateProductRequest,actGetProductRequest,actFetchProductsRequest} from './../actions/index';
import itemSelected from './../reducers/itemSelected'
class FormPage extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      price: '',
      status: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  UNSAFE_componentWillMount(){
    let {match} = this.props; 
    if(match){ // update
      let id = match.params.id;
      this.props.onEditProduct(id);
    }// else => add
  }
  UNSAFE_componentWillReceiveProps(nextProps){
  let itemSelected = nextProps.itemSelected;
    if(nextProps!==null){
         this.setState({
            id: itemSelected.id,
            name: itemSelected.name,
            price: itemSelected.price,
            status: itemSelected.status
         })
    }  
  }
  handleChange(event) {
    const target = event.target;
    const value = target.name === 'status' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
handleSubmit(event) {
event.preventDefault();
let id = this.state.id;
let product ={
  id: this.state.id,
  name:this.state.name,
  price:this.state.price,
  status: this.state.status
}
if(id){
  this.props.onUpdateProduct(product);
} else {
this.props.handleSubmit(product);
  }
this.props.fetchAllPropducts()

  }
render(){
 return (
  <div className="container">
  <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label>Tên Sản Phẩm</label>
    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control"/>
  </div>
  <div className="form-group">
    <label>Giá</label>
    <input type="number" value={this.state.price} onChange={this.handleChange} name="price" className="form-control"/>
  </div>

    <div className="form-check">
      <label className="form-check-label mr-5"> Trạng Thái</label>
      <input type="checkbox" checked={this.state.status} value={this.state.status} onChange={this.handleChange} name="status" className="form-check-input mr-10"/>
       Còn Hàng
    </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/product-list" className="btn btn-danger mr-5">
  <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
</Link>
  </form> 
  </div>


 );
}

}
const mapStatetoProps = state => {
  return { 
      itemSelected:state.itemSelected
  }
  }
const mapDispatchToProps = (dispatch,ownProps) =>{
  return {
    handleSubmit: (product) => {
      dispatch(actAddProductRequest(product))
    },
    onEditProduct: (id) =>{
      dispatch(actGetProductRequest(id))
    },
    onUpdateProduct: (product) =>{
      dispatch(acUpdateProductRequest(product))
    },
    fetchAllPropducts: ()=>{
      dispatch(actFetchProductsRequest())
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(FormPage);