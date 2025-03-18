import React, { createContext, useState, useContext } from 'react';

// Tạo Context
const AppContext = createContext();

// Tạo Provider để bọc toàn bộ ứng dụng
export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook tiện ích để truy cập AppContext
export const useAppContext = () => useContext(AppContext);
