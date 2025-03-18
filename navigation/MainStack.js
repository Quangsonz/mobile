import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="Explorer" 
                component={HomeScreen} 
                options={{ tabBarIcon: ({ color }) => <Icon name="cutlery" size={20} color={color} /> }} 
            />
            <Tab.Screen 
                name="Account" 
                component={ProfileScreen} 
                options={{ tabBarIcon: ({ color }) => <Icon name="user" size={20} color={color} /> }} 
            />
        </Tab.Navigator>
    );
};

export default MainStack;
