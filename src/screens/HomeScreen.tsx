import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FeatureItem, Card } from '../components';
import { globalStyles } from '../styles/globalStyles';

const HomeScreen = () => {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.headerText}>Welcome to My App</Text>
            </View>

            <Card>
                <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={styles.logo}
                />
                <Text style={globalStyles.title}>React Native with Expo</Text>
                <Text style={globalStyles.description}>
                    This is a simple React Native application created with Expo.
                    This screen demonstrates various components like Images, Text, and Cards.
                </Text>
            </Card>

            <Card>
                <Text style={globalStyles.title}>Features</Text>
                <FeatureItem text="Multi-screen navigation" />
                <FeatureItem text="Interactive components" />
                <FeatureItem text="User input forms" />
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 16,
    },
});

export default HomeScreen;