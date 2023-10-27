import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './LoginPage';
import {
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";
import RegPage from './RegPage';




const router = createBrowserRouter([
{
    path: "/xx",
    element:  <LoginPage />,
},
{
    path: "/xy",
    element:  <RegPage />,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

