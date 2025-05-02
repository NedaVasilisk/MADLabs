import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert, TextInput, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { getFileInfo, listFiles, deleteItem, createFolder, createFile, getStorageStats } from '../utils/fileUtils';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ROOT_DIR = FileSystem.documentDirectory + 'AppData/';

type RootStackParamList = {
    FileManager: undefined;
    Editor: { path: string };
};

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'FileManager'>;
};

type StorageStats = {
    total: string;
    free: string;
    used: string;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const [items, setItems] = useState<string[]>([]);
    const [currentPath, setCurrentPath] = useState(ROOT_DIR);
    const [newName, setNewName] = useState('');
    const [stats, setStats] = useState<StorageStats>({ total: '0', free: '0', used: '0' });

    const loadFiles = async () => {
        const files = await listFiles(currentPath);
        setItems(files);
        const s = await getStorageStats();
        setStats(s);
    };

    useEffect(() => {
        loadFiles();
    }, [currentPath]);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text>Current path: {currentPath.replace(ROOT_DIR, '') || '/'}</Text>
            <Text>Total: {stats.total} MB | Free: {stats.free} MB | Used: {stats.used} MB</Text>
            <TextInput placeholder="New file or folder" value={newName} onChangeText={setNewName} />
            <Button title="Create Folder" onPress={async () => { await createFolder(currentPath + newName); setNewName(''); loadFiles(); }} />
            <Button title="Create File" onPress={async () => { await createFile(currentPath + newName + '.txt', ''); setNewName(''); loadFiles(); }} />
            <FlatList data={items} keyExtractor={item => item} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                    if (item.endsWith('/')) setCurrentPath(currentPath + item);
                    else if (item.endsWith('.txt')) navigation.navigate('Editor', { path: currentPath + item });
                }} onLongPress={() => Alert.alert('Delete?', item, [
                    { text: 'Cancel' },
                    { text: 'Delete', onPress: async () => { await deleteItem(currentPath + item); loadFiles(); } },
                ])}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )} />
            {currentPath !== ROOT_DIR && <Button title="Back" onPress={() => setCurrentPath(currentPath.replace(/[^/]+\/?$/, ''))} />}
        </View>
    );
}

