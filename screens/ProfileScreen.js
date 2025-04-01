import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const ProfileScreen = () => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            {/* Header xanh */}
            <View style={styles.header} />
            
            {/* Avatar */}
            <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />

            {/* Thông tin người dùng */}
            <Text style={styles.name}>Quang Son</Text>
            <Text style={styles.role}>Mobile developer</Text>
            <Text style={styles.description}>
                I have above 5 years of experience in native mobile apps development, now I am learning React Native
            </Text>

            {/* Nút Sign Out */}
            <TouchableOpacity style={styles.signOutButton} onPress={logout}>
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', backgroundColor: '#f2f2f2' },
    header: { width: '100%', height: 100, backgroundColor: '#0099ff' },
    avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'white', marginTop: -50 },
    name: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
    role: { color: '#0099ff', fontSize: 16 },
    description: { textAlign: 'center', paddingHorizontal: 30, marginTop: 10 },
    signOutButton: { backgroundColor: '#FFA500', padding: 10, borderRadius: 8, marginTop: 20 },
    signOutText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});

export default ProfileScreen;
