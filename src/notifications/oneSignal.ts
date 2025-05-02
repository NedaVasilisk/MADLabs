import Constants from 'expo-constants';

const extra = Constants?.expoConfig?.extra || Constants?.manifest2?.extra || Constants?.extra || {};

const ONE_SIGNAL_APP_ID = extra.oneSignalAppId;
const ONE_SIGNAL_REST_API_KEY = extra.oneSignalAPIKey;

if (!ONE_SIGNAL_APP_ID || !ONE_SIGNAL_REST_API_KEY) {
    console.error('OneSignal credentials are missing!');
}

export async function scheduleNotification(task: {
    title: string;
    desc?: string;
    reminderTime: Date;
}) {

    if (!ONE_SIGNAL_APP_ID || !ONE_SIGNAL_REST_API_KEY) {
        return null;
    }

    const res = await fetch('https://api.onesignal.com/notifications', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Basic ${ONE_SIGNAL_REST_API_KEY}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            app_id: ONE_SIGNAL_APP_ID,
            headings: { en: task.title },
            contents: { en: task.desc ?? '' },
            send_after: task.reminderTime.toISOString(),
            included_segments: ['Active Users'],
        }),
    });

    const json = await res.json();
    console.log('📬 OneSignal response:', json);
    return json.id;
}

export async function cancelNotification(notificationId: string) {
    const url = `https://api.onesignal.com/notifications/${notificationId}?app_id=${ONE_SIGNAL_APP_ID}`;
    const options = {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            Authorization: `Basic ${ONE_SIGNAL_REST_API_KEY}`,
        },
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        console.log('Cancel notification response:', json);
    } catch (error) {
        console.error('Error canceling notification:', error);
    }
}
