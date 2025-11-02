"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CardType, SwipeEvent as SwipeEventType } from "@/types/cards"; // importa os tipos unificados

type SwipeHistoryContextType = {
  history: SwipeEventType[];
  addSwipe: (card: CardType, action: "match" | "pass") => void;
  removeSwipe: (event: SwipeEventType) => void;
};

const SwipeHistoryContext = createContext<SwipeHistoryContextType | undefined>(undefined);

export function SwipeHistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<SwipeEventType[]>([]);

  const addSwipe = (card: CardType, action: "match" | "pass") => {
    const newEvent: SwipeEventType = { card, action, timestamp: new Date() };
    console.log("Adding swipe to global context:", newEvent);
    setHistory((prev) => [...prev, newEvent]);
  };

  const removeSwipe = (event: SwipeEventType) => {
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
