import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, useAppContext } from './context/AppContext';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

const MainApp = () => {
    const { isLoggedIn } = useAppContext();
    return <NavigationContainer>{isLoggedIn ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

const App = () => {
    return (
        <AppProvider>
            <MainApp />
        </AppProvider>
    );
};

export default App;
