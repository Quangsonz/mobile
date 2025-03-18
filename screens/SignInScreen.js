import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = ({ navigation }) => {
    const { setIsLoggedIn } = useAppContext();

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <Text style={styles.label}>Email ID</Text>
            <TextInput style={styles.input} placeholder="Enter your email here!" />

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password here!" secureTextEntry />

            <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
                <Text style={styles.forgotPassword}>For got password?</Text>
            </TouchableOpacity>

            <Button mode="contained" style={styles.signInButton} onPress={handleLogin}>
                Sign In
            </Button>

            <Text style={styles.orText}>Or sign in with</Text>

            <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.socialButton}>
                    <Icon name="google" size={20} color="#DB4437" />
                    <Text style={styles.socialText}> Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1877F2' }]}>
                    <Icon name="facebook" size={20} color="#fff" />
                    <Text style={[styles.socialText, { color: '#fff' }]}> Facebook</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.signupText}>
                Not yet a member?{' '}
                <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
    label: { alignSelf: 'flex-start', marginLeft: 40, fontSize: 14, fontWeight: '500', marginBottom: 5 },
    input: { width: '85%', height: 45, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 10, marginBottom: 15 },
    forgotPassword: { alignSelf: 'flex-end', marginRight: 40, color: '#FF9800', fontSize: 14 },
    signInButton: { width: '85%', padding: 8, borderRadius: 8, backgroundColor: '#FF9800', marginVertical: 15 },
    orText: { fontSize: 16, marginVertical: 10 },
    socialButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '85%', marginVertical: 10 },
    socialButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, flex: 1, justifyContent: 'center', marginHorizontal: 5 },
    socialText: { fontSize: 16 },
    signupText: { marginTop: 15, fontSize: 14 },
    signupLink: { color: '#FF9800', fontWeight: 'bold' },
});

export default SignInScreen;
