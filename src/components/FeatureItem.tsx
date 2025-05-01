import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FeatureItemProps {
    text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
    return (
        <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={24} color="green" />
            <Text style={styles.featureText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    featureText: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default FeatureItem;