import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ProductItem = ({ product }) => {
  const handlePress = () => {
    Alert.alert('Product Selected', `You selected: ${product.name}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default ProductItem;
