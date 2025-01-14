import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native List Examples</Text>
      {/* FlatList Component */}
      <FlatListExample />
      {/* SectionList Component */}
      <SectionListExample />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
