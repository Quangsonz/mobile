import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = '@auth_status';

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load auth status when component mounts
        loadAuthStatus();
    }, []);

    const loadAuthStatus = async () => {
        try {
            console.log('Loading auth status...');
            const status = await AsyncStorage.getItem(AUTH_KEY);
            console.log('Current auth status:', status);
            setIsLoggedIn(status === 'true');
        } catch (error) {
            console.error('Error loading auth status:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async () => {
        try {
            console.log('Setting auth status to true...');
            await AsyncStorage.setItem(AUTH_KEY, 'true');
            console.log('Auth status set successfully');
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error saving auth status:', error);
            throw error; // Re-throw the error to handle it in the component
        }
    };

    const logout = async () => {
        try {
            console.log('Setting auth status to false...');
            await AsyncStorage.setItem(AUTH_KEY, 'false');
            console.log('Auth status set successfully');
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Error saving auth status:', error);
            throw error; // Re-throw the error to handle it in the component
        }
    };

    return { isLoggedIn, isLoading, login, logout };
}; 