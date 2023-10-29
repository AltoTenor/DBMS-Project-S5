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
const routesForPublic = [
        {
            path: "/register",
            element: <RegPage/>,
        },
        {
            path: "/login",
            element: <LoginPage/>,
        },
        {
            path: "/about-us",
            element: <div>About Us</div>,
        },
    ];
        
        
        
        
function ProtectedRouterProvider(){

    const { token } = useAuth();
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                path: "/dashboard",
                element: <UserDashboard/>,
                },
                {
                    path: "/admin-dashboard",
                    element: <AdminDashboard/>,
                },
                {
                path: "/logout",
                element: <Logout/>,
                },
            ],
        },
    ];
    
    // const routesForNotAuthenticatedOnly = [
    //     {
    //     path: "/login",
    //       element: <LoginPage/>,
    //     //   element: <div>Login Page</div>,
    //     },
    // ];
    
    const router = createBrowserRouter([
        ...routesForPublic,
        // ...(!token ? routesForNotAuthenticatedOnly : []),
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

