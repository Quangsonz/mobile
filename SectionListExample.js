import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const SectionListExample = () => {
  const groupedProducts = [
    { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
    { title: 'Category B', data: ['Product B1', 'Product B2'] },
    { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
  ];

  const handlePress = (productName) => {
    Alert.alert('Product Selected', `You selected: ${productName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SectionList: Grouped Product List</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
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
  headerContainer: {
    backgroundColor: '#dfe4ea',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  item: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SectionListExample;
