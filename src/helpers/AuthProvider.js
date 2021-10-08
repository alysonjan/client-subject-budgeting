import React, { createContext, useState } from 'react';

const token = localStorage.getItem('token');

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // @TODO temporary solution
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);


    // @TODO Reload redux, refresh token
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
            }}>
            {children}
        </AuthContext.Provider>
    );
};