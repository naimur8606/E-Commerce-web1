import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AuthProvider from './Providers/AuthProvider';
import MainLayout from './Components/MainLayout';
import AddProduct from './Components/CURD/AddProduct/AddProduct';
import Login from './Components/Create&Login/Login';
import CreateUser from './Components/Create&Login/CreateUser';
import ProductDetails from './Components/Home/ProductDetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path:"/add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/createUser",
        element: <CreateUser></CreateUser>
      },
      {
        path:"/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params?.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
