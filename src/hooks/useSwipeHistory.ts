import { useState } from "react";

//Type of each swipe event
export type SwipeEvent = {
    card: {
        name: string;
        bio: string; 
        skills: string[];
        images: {type: "image" | "video";src: string}[];
        distance: string;
    };
    action: "match" | "pass"; //swipe type
    timestamp: Date; //when the action occured
};

//hook to store history of swipes
export function useSwipeHistory() {
    const [history, setHistory] = useState<SwipeEvent[]>([]);

    //add a new swipe event
    const addSwipe = (card: SwipeEvent["card"], action: "match" | "pass") => {
        setHistory((prev) => [
            ...prev,
            {card, action, timestamp: new Date()},
        ]);
    };

    return {history, addSwipe};
}