import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from './hooks/useAuth';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { ActivityIndicator, View } from 'react-native';

const App = () => {
    const { isLoggedIn, isLoading } = useAuth();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default App;
