
import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import './../App.css';
const menus = [
  {
    name:'Trang Chủ',
    to:'/',
    exact:true
  }, 
  {
    name:'Quản Lý Sản Phẩm',
    to:'/product-list',
    exact:false
  }
]
const MenuLink = ({menu}) => {
  return (
      <Route
      path={menu.to}
      exact={menu.exact}
      children = {
          ({match})=>{
              if(match!==null && match.isExact === true){
              return <li className="active">{menu.name}</li>
              } else {
              return <li><Link to={menu.to}>{menu.name}</Link></li>
              }

          }
      }
      />
  )
}
 class Menu extends Component {
 
render(){
  return (
  <div>
    <nav>
        <ul>
         {this.showMenus(menus)}
        </ul>
      </nav>
    </div> 
  );
  }
showMenus(menus){
let xhml = null; 
if (menus !==null && menus.length > 0 ){
    xhml = menus.map((menu,index)=>{
        if(menu !== undefined){
            return <MenuLink menu = {menu} label={menu.name} to={menu.to} key={index}/>
        }
        return null;
    })
return xhml
}
}
}
export default Menu;


