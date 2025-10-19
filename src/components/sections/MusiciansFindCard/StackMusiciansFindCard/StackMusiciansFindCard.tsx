"use client";
import { useState, useRef } from "react";

import ContainerMusiciansFindCard from "../ContainerMusiciansFindCard/ContainerMusiciansFindCard";
import DraggableCard, { DraggableCardHandle } from "../DraggableMusiciansFindCard/DraggableMusiciansFindCard";
import SwipeButtons from "../SwipeButtonsMusiciansFindCard/SwipeButtonsMusiciansFindCard";
import { useSwipeHistory } from "@/context/SwipeHistoryContext";
import styles from "./StackMusiciansFindCard.module.css"
import { CardType } from "@/types/cards";


type StackCardsMusiciansProps = {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

export default function StackCardsMusicians({cards, setCards}: StackCardsMusiciansProps) {

    const {addSwipe} = useSwipeHistory();

    //Ref for top card so buttons can trigger swipe
    const topCardRef = useRef<DraggableCardHandle | null>(null);

    //Remove top card after swipe animation ends
const handleRemoveTop = (card: CardType, action: "match" | "pass") => {
    addSwipe(card, action); // save to history
    setCards((prev) => prev.slice(1)); // remove top card
};



    const handlePass = () => topCardRef.current?.triggerSwipe("left");
    const handleMatch = () => topCardRef.current?.triggerSwipe("right");

  return (
    <div className={styles.stack_container}>
      {/* Map cards: top card is last in DOM for proper stacking */}
      {cards
        .map((card, index) => {
          const isTop = index === 0;
          return (
            <div
              key={card.name}
              className={styles.card_layer}
              style={{
                zIndex: cards.length - index,
                transform: `translate(-50%, -50%) translateY(${index * 8}px) scale(${
                  1 - index * 0.05
                })`,
              }}
            >
              <DraggableCard
                ref={isTop ? topCardRef : null} // Only top card needs ref
                onPass={() => handleRemoveTop(card, "pass")}
                onMatch={() => handleRemoveTop(card, "match")}
              >
                <ContainerMusiciansFindCard
                  name={card.name}
                  bio={card.bio}
                  skills={card.skills}
                  slides={card.images}
                  distance={card.distance}
                />
              </DraggableCard>
            </div>
          );
        })
        .reverse() /* Reverse so top card renders last for proper z-index */}

      {/* Swipe buttons */}
      <SwipeButtons onPass={handlePass} onMatch={handleMatch} />
    </div>
  );
}