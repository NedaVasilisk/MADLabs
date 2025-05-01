import React, { createContext, useState, ReactNode } from 'react';

type ScoreContextType = {
    score: number;
    tapCount: number;
    doubleTapCount: number;
    longPressDone: boolean;
    panDone: boolean;
    swipeLeft: boolean;
    swipeRight: boolean;
    resized: boolean;

    addPoints: (pts: number) => void;
    setTapCount: React.Dispatch<React.SetStateAction<number>>;
    setDoubleTapCount: React.Dispatch<React.SetStateAction<number>>;
    setLongPressDone: React.Dispatch<React.SetStateAction<boolean>>;
    setPanDone: React.Dispatch<React.SetStateAction<boolean>>;
    setSwipeLeft: React.Dispatch<React.SetStateAction<boolean>>;
    setSwipeRight: React.Dispatch<React.SetStateAction<boolean>>;
    setResized: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ScoreContext = createContext<ScoreContextType>({} as ScoreContextType);

export function ScoreProvider({ children }: { children: ReactNode }) {
    const [score, setScore] = useState<number>(0);
    const [tapCount, setTapCount] = useState<number>(0);
    const [doubleTapCount, setDoubleTapCount] = useState<number>(0);
    const [longPressDone, setLongPressDone] = useState<boolean>(false);
    const [panDone, setPanDone] = useState<boolean>(false);
    const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
    const [swipeRight, setSwipeRight] = useState<boolean>(false);
    const [resized, setResized] = useState<boolean>(false);

    const addPoints = (pts: number) => setScore(prev => prev + pts);

    return (
        <ScoreContext.Provider
            value={{
                score,
                tapCount,
                doubleTapCount,
                longPressDone,
                panDone,
                swipeLeft,
                swipeRight,
                resized,
                addPoints,
                setTapCount,
                setDoubleTapCount,
                setLongPressDone,
                setPanDone,
                setSwipeLeft,
                setSwipeRight,
                setResized,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
}
