import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.headerText}>Contact Us</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formLabel}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />

                <Text style={styles.formLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />

                <Text style={styles.formLabel}>Message</Text>
                <TextInput
                    style={styles.textArea}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type your message here"
                    multiline
                    numberOfLines={4}
                />

                <Button
                    title="Submit"
                    onPress={handleSubmit}
                    color="#007bff"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 16,
    },
    formLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        minHeight: 100,
        textAlignVertical: 'top',
    },
});

export default ContactScreen;