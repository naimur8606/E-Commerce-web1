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
import PrivateRoute from './Route/PrivateRoute';
import Cart from './Components/Cart/Cart';
import ErrorPage from './Components/Error/ErrorPage';
import CategoryHomePage from './Components/CategoryHomePage/CategoryHomePage';
import UpdateProduct from './Components/CURD/UpdateProduct/UpdateProduct';
import Product from './Components/Home/Products/Product/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path:"/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/update-product/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params?.id}`)
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
        path:"/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path:"/:categories",
        element: <CategoryHomePage></CategoryHomePage>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path:"/productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
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
