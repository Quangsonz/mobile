import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NotificationItem from './NotificationItem';

const NotificationList = ({ data }) => {
  const renderItem = ({ item }) => (
    <NotificationItem
      icon={item.icon}
      title={item.title}
      description={item.description}
      time={item.time}
      status={item.status} // Truyền trạng thái
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});

export default NotificationList;
