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
import NavUpdate from './Components/Nav/NavUpdate';
import BannerUpdate from './Components/CURD/Banner/BannerUpdate';
import Categories from './Components/Home/Categories/Categories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/categories",
        element: <Categories></Categories>
      },
      {
        path:"/navUpdate",
        element: <NavUpdate></NavUpdate>
      },
      {
        path:"/bannerUpdate",
        element: <BannerUpdate></BannerUpdate>
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
