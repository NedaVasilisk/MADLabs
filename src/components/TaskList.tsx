import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface Props {
    tasks: Task[];
    onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onDelete }: Props) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.desc}</Text>
                    <Text>{new Date(item.reminderTime).toLocaleString()}</Text>
                    <Button title="Видалити" onPress={() => onDelete(item.id)} />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 6,
    },
    title: {
        fontWeight: 'bold',
    },
});
