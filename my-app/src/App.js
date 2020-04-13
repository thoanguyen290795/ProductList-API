 import React, {Component} from 'react';
 import Menu from './components/Menu';
 import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
 import routes from './routes';
class App extends Component {
render(){
  return (
    <Router>
    <div>
    <Menu/>
      <div className="container">
        <div className="row">
        {this.showRoute(routes)}
      </div>
</div>
</div>
</Router>
  );
}
showRoute(routes){
  let xhtml = null;  
  if(routes.length > 0 ){
      xhtml = routes.map((route, index)=> {
          return (
              <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
          );
      });
  }

  return <Switch>{xhtml}</Switch>;
}
}
export default App;
