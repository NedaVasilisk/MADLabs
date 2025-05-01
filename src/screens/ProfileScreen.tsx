import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const ProfileScreen = () => {
    const [notifications, setNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <View style={globalStyles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>User Name</Text>
                <Text style={styles.profileInfo}>user@example.com</Text>
            </View>

            <View style={styles.settingsContainer}>
                <Text style={globalStyles.title}>Settings</Text>

                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={() => setNotifications(prev => !prev)}
                        value={notifications}
                    />
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={() => setDarkMode(prev => !prev)}
                        value={darkMode}
                    />
                </View>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileHeader: {
        alignItems: 'center',
        padding: 16,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileInfo: {
        fontSize: 16,
        color: 'gray',
    },
    settingsContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    settingLabel: {
        fontSize: 16,
    },
    logoutButton: {
        backgroundColor: '#dc3545',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 24,
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;