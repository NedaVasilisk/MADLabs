
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskItem({ title, done }: { title: string; done: boolean }) {
  return (
    <View style={[styles.task, { backgroundColor: done ? '#a5d6a7' : '#ef9a9a' }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 16
  }
});
