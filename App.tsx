import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import TaskForm from './src/components/TaskForm';
import TaskList from './src/components/TaskList';
import { Task, TaskFormData } from './src/types/Task';
import { scheduleNotification, cancelNotification } from './src/notifications/oneSignal';
import uuid from 'react-native-uuid';


export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = async (taskData: TaskFormData) => {
    const id = uuid.v4() as string;
    const notificationId = await scheduleNotification(taskData);
    const newTask: Task = { ...taskData, id, notificationId: notificationId ?? undefined };
    setTasks(prev => [...prev, newTask]);
  };

  const handleDeleteTask = async (id: string) => {
    setTasks(prev => {
      const task = prev.find(t => t.id === id);
      if (task?.notificationId) cancelNotification(task.notificationId);
      return prev.filter(t => t.id !== id);
    });
  };

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.header}>📋 To-Do Reminder</Text>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});


