export interface Task {
    id: string;
    title: string;
    desc?: string;
    reminderTime: Date;
    notificationId?: string;
}

export type TaskFormData = Omit<Task, 'id' | 'notificationId'>;
