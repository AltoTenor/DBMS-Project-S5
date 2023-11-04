import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    // Check if the user is authenticated
    if (!token || token == "undefined") {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }
    console.log("Here!");
  
    // If authenticated, render the child routes
    return <Outlet />;
};