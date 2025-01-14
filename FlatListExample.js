import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductItem from './ProductItem';

const FlatListExample = () => {
  const products = [
    { id: '1', name: 'Product A', price: '10.00' },
    { id: '2', name: 'Product B', price: '15.00' },
    { id: '3', name: 'Product C', price: '20.00' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlatList: Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FlatListExample;
