import * as FileSystem from 'expo-file-system';

const ROOT = FileSystem.documentDirectory + 'AppData/';

export const ensureRootDir = async () => {
    const dirInfo = await FileSystem.getInfoAsync(ROOT);
    if (!dirInfo.exists) await FileSystem.makeDirectoryAsync(ROOT, { intermediates: true });
};

export const listFiles = async (dir: string) => {
    const items = await FileSystem.readDirectoryAsync(dir);
    const result = await Promise.all(items.map(async (name) => {
        const info = await FileSystem.getInfoAsync(dir + name);
        return info.isDirectory ? name + '/' : name;
    }));
    return result;
};

export const createFolder = async (path: string) => {
    await FileSystem.makeDirectoryAsync(path, { intermediates: true });
};

export const createFile = async (path: string, content: string) => {
    await FileSystem.writeAsStringAsync(path, content);
};

export const readFile = async (path: string) => {
    return await FileSystem.readAsStringAsync(path);
};

export const updateFile = async (path: string, content: string) => {
    await FileSystem.writeAsStringAsync(path, content);
};

export const deleteItem = async (path: string) => {
    await FileSystem.deleteAsync(path, { idempotent: true });
};

export const getFileInfo = async (path: string) => {
    return await FileSystem.getInfoAsync(path);
};

export const getStorageStats = async () => {
    const freeBytes = await FileSystem.getFreeDiskStorageAsync();
    const totalBytes = await FileSystem.getTotalDiskCapacityAsync();

    const total = totalBytes / 1024 / 1024;
    const free = freeBytes / 1024 / 1024;
    const used = total - free;

    return {
        total: total.toFixed(2),
        free: free.toFixed(2),
        used: used.toFixed(2),
    };
};
