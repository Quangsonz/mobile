import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ icon, title, description, time, status }) => {
  return (
    <View
      style={[
        styles.item,
        { backgroundColor: status === 'unread' ? '#E8F5E9' : '#FFFFFF' },
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
    color: '#4CAF50',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationItem;
