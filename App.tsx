import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { ScoreProvider } from './src/context/ScoreContext';

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <ScoreProvider>
                <NavigationContainer>
                    <AppNavigator/>
                </NavigationContainer>
            </ScoreProvider>
        </GestureHandlerRootView>
    );
}
