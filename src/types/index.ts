export interface User {
    name: string;
    email: string;
    imageUrl: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface SettingsState {
    notifications: boolean;
    darkMode: boolean;
}