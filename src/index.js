import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './LoginPage';
import RegPage from './RegPage';
import Logout from './Logout';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import {
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";
import AuthProvider, { useAuth } from './Auth/authProvider'
import { ProtectedRoute } from './Auth/ProtectecRoute'




// Define public routes accessible to all users
// const routesForPublic = [
//     {
    //         path: "/service",
    //         element: <div>Service Page</div>,
    //     },
    //     {
        //         path: "/about-us",
        //         element: <div>About Us</div>,
        //     },
        // ];
        
        
        
        
function ProtectedRouterProvider(){

    const { token } = useAuth();
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                path: "/",
                element: <UserDashboard/>,
                },
                {
                path: "/logout",
                element: <div>Logout</div>,
                },
            ],
        },
    ];
    
    const routesForNotAuthenticatedOnly = [
        {
          path: "/",
          element: <div>Home Page</div>,
        },
        {
        path: "/login",
          element: <LoginPage/>,
        //   element: <div>Login Page</div>,
        },
        {
        path: "/logout",
        //   element: <LoginPage/>,
          element: <Logout/>,
        },
    ];
    
    const router = createBrowserRouter([
        // ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);
    return(
        <RouterProvider router={router} />
    );
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <ProtectedRouterProvider/>
    </AuthProvider>
  </React.StrictMode>
);

