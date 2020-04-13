import React from 'react'; 
import HomePage from './pages/HomePage'; 
import NotFoundPage from './pages/NotFountPage';
import ProductListPage from './pages/ProductListPage';
import FormPage from './pages/FormPage';
const routes = [
    {
        path:'/',
        exact:true,
        main: ()=> <HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main: ()=> <ProductListPage/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main: ({match,history})=> <FormPage match={match} history={history}/>
    },
    {
        path:'/product/add',
        exact:false,
        main:({history}) => <FormPage history={history}/>
    },
    {
        path:'',
        exact:true,
        main: ()=> <NotFoundPage/>
    }
    
    

]
export default routes