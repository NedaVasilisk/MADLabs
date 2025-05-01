import React, { useContext, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {
    GestureHandlerRootView,
    TapGestureHandler,
    LongPressGestureHandler,
    PanGestureHandler,
    FlingGestureHandler,
    PinchGestureHandler,
    Directions,
    State,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScoreContext } from '../context/ScoreContext';

export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const {
        score,
        addPoints,
        tapCount, doubleTapCount,
        setTapCount, setDoubleTapCount,
        setLongPressDone,
        setPanDone,
        setSwipeLeft, setSwipeRight,
        setResized,
    } = useContext(ScoreContext);

    const [translateX, setTranslateX] = React.useState(0);
    const [translateY, setTranslateY] = React.useState(0);
    const [scale, setScale] = React.useState(1);
    const lastTap = useRef<number | null>(null);

    const onTap = () => {
        const now = Date.now();
        if (lastTap.current && now - lastTap.current < 300) {
            addPoints(2);
            setDoubleTapCount(doubleTapCount + 1);
        } else {
            addPoints(1);
            setTapCount(tapCount + 1);
        }
        lastTap.current = now;
    };

    const onLong = () => {
        addPoints(5);
        setLongPressDone(true);
    };

    const onPanEvent = (e: any) => {
        setTranslateX(e.nativeEvent.translationX);
        setTranslateY(e.nativeEvent.translationY);
    };
    const onPanState = (e: any) => {
        if (e.nativeEvent.state === State.END) setPanDone(true);
    };

    const onFling = (dir: 'left' | 'right') => {
        const pts = Math.floor(Math.random() * 10) + 1;
        addPoints(pts);
        dir === 'left' ? setSwipeLeft(true) : setSwipeRight(true);
    };

    const onPinchEvent = (e: any) => {
        setScale(e.nativeEvent.scale);
    };
    const onPinchState = (e: any) => {
        if (e.nativeEvent.state === State.END) {
            setResized(true);
            setScale(1);
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.score}>Очки: {score}</Text>

                <FlingGestureHandler
                    direction={Directions.LEFT}
                    onActivated={() => onFling('left')}
                >
                    <FlingGestureHandler
                        direction={Directions.RIGHT}
                        onActivated={() => onFling('right')}
                    >
                        <PinchGestureHandler
                            onGestureEvent={onPinchEvent}
                            onHandlerStateChange={onPinchState}
                        >
                            <PanGestureHandler
                                onGestureEvent={onPanEvent}
                                onHandlerStateChange={onPanState}
                            >
                                <LongPressGestureHandler
                                    minDurationMs={800}
                                    onActivated={onLong}
                                >
                                    <TapGestureHandler numberOfTaps={2} onActivated={onTap}>
                                        <TapGestureHandler onActivated={onTap}>
                                            <View
                                                style={[
                                                    styles.circle,
                                                    { transform: [{ translateX }, { translateY }, { scale }] },
                                                ]}
                                            />
                                        </TapGestureHandler>
                                    </TapGestureHandler>
                                </LongPressGestureHandler>
                            </PanGestureHandler>
                        </PinchGestureHandler>
                    </FlingGestureHandler>
                </FlingGestureHandler>

                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => navigation.navigate('Завдання')}
                >
                    <Text style={styles.fabText}>→ Завдання</Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    score: { fontSize: 28, marginBottom: 40 },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 50,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#4a90e2',
        padding: 12,
        borderRadius: 24,
    },
    fabText: {
        color: '#fff',
        fontSize: 16,
    },
});




