import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const UserProtectedRoutes = () => {
    const BaseUrl = `${import.meta.env.VITE_BASE_URL}/auth`
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const tokenString = localStorage.getItem('token');
      const currentToken = tokenString ? JSON.parse(tokenString) : null;

      if (!currentToken) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${BaseUrl}/checkauth`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${currentToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token: currentToken })
        })
        const data = await res.json()

        setIsAuthenticated(data.status === "success")
      } catch (err) {
        console.log(err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return null;
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return <Outlet/>
  
}

export default UserProtectedRoutes