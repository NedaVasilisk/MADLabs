import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { readFile, updateFile } from '../utils/fileUtils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "../types/RootStackParamList";

type EditorScreenProps = NativeStackScreenProps<RootStackParamList, 'Editor'>;

export default function EditorScreen({ route, navigation }: EditorScreenProps) {
    const { path } = route.params;
    const [content, setContent] = useState('');

    useEffect(() => {
        (async () => {
            const text = await readFile(path);
            setContent(text);
        })();
    }, []);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                multiline
                value={content}
                onChangeText={setContent}
                style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }}
            />
            <Button
                title="Save"
                onPress={async () => {
                    await updateFile(path, content);
                    navigation.goBack();
                }}
            />
        </View>
    );
}
