import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TaskFormData } from '../types/Task';

interface Props {
    onAddTask: (task: TaskFormData) => void;
}

export default function TaskForm({ onAddTask }: Props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [reminderTime, setReminderTime] = useState(new Date());
    const [isPickerVisible, setPickerVisible] = useState(false);

    const handleSubmit = () => {
        if (!title.trim()) return;
        onAddTask({ title, desc, reminderTime });
        setTitle('');
        setDesc('');
        setReminderTime(new Date());
    };

    const handleConfirm = (date: Date) => {
        setReminderTime(date);
        setPickerVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>📋 To-Do Reminder</Text>

            <TextInput
                placeholder="Назва"
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                placeholder="Опис"
                style={styles.input}
                value={desc}
                onChangeText={setDesc}
            />

            <Button title="ОБРАТИ ДАТУ ТА ЧАС" onPress={() => setPickerVisible(true)} />

            <DateTimePickerModal
                isVisible={isPickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={() => setPickerVisible(false)}
                date={reminderTime}
            />

            <Text style={styles.dateText}>{reminderTime.toLocaleString()}</Text>

            <Button title="ДОДАТИ ЗАДАЧУ" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 12,
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    dateText: {
        textAlign: 'center',
        marginVertical: 8,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 16,
    },
});


