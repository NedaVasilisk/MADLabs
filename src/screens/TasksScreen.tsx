
import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import { ScoreContext } from '../context/ScoreContext';
import { taskList } from '../utils/taskList';

export default function TasksScreen() {
  const context = useContext(ScoreContext);
  const tasks = taskList(context);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskItem title={item.title} done={item.done} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});
