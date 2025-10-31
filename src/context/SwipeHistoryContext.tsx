"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type SwipeEvent = {
  card: {
    name: string;
    bio: string;
    skills: string[];
    image_profile?: { type: "image"; src: string };
    images: { type: "image" | "video"; src: string }[];
    distance: string;
  };
  action: "match" | "pass";
  timestamp: Date;
};

type SwipeHistoryContextType = {
  history: SwipeEvent[];
  addSwipe: (card: SwipeEvent["card"], action: "match" | "pass") => void;
  removeSwipe: (event: SwipeEvent) => void;
};

const SwipeHistoryContext = createContext<SwipeHistoryContextType | undefined>(undefined);

export function SwipeHistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<SwipeEvent[]>([]);

  const addSwipe = (card: SwipeEvent["card"], action: "match" | "pass") => {
    const newEvent: SwipeEvent = { card, action, timestamp: new Date() };
    console.log("Adding swipe to global context:", newEvent);
    setHistory((prev) => [...prev, newEvent]);
  };

  const removeSwipe = (event: SwipeEvent) => {
    setHistory((prev) => prev.filter((e) => e !== event));
  };

  return (
    <SwipeHistoryContext.Provider value={{ history, addSwipe, removeSwipe }}>
      {children}
    </SwipeHistoryContext.Provider>
  );
}

export function useSwipeHistory() {
  const context = useContext(SwipeHistoryContext);
  if (!context) {
    throw new Error("useSwipeHistory must be used within a SwipeHistoryProvider");
  }
  return context;
}
