import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField'; // Import InputField
import Button from '../components/Button'; // Import Button

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const validatePhoneNumber = () => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage('Số điện thoại không đúng định dạng.');
    } else {
      setErrorMessage('');
      navigation.navigate('Home'); // Điều hướng đến màn hình Home
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <InputField
        label="Số điện thoại"
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Tiếp tục" onPress={validatePhoneNumber} /> {/* Sử dụng button tái sử dụng */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  error: { color: 'red', fontSize: 14, marginBottom: 10 },
});

export default LoginScreen;
