import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import EditorScreen from './screens/EditorScreen';
import { RootStackParamList } from './types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FileManager" component={HomeScreen} />
                <Stack.Screen name="Editor" component={EditorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

