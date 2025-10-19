"use client";
import { useState, useRef } from "react";

import ContainerMusiciansFindCard from "../ContainerMusiciansFindCard/ContainerMusiciansFindCard";
import DraggableCard, { DraggableCardHandle } from "../DraggableMusiciansFindCard/DraggableMusiciansFindCard";
import SwipeButtons from "../SwipeButtonsMusiciansFindCard/SwipeButtonsMusiciansFindCard";
import { useSwipeHistory } from "@/hooks/useSwipeHistory";
import styles from "./StackMusiciansFindCard.module.css"


//Define type for each musician card
type MusicianCardData = {
    name: string;
    bio: string;
    skills: string[];
    images: { type: "image" | "video"; src: string }[];
    distance: string;
};

export default function StackCardsMusicians() {
    //Example stack data
    const cardsData: MusicianCardData[] = [
        {
            name: "Renan",
            bio: "Sou cantor e compositor, apaixonado por transformar sentimentos em música.",
            skills: ["Vocalista", "Guitarrista"],
            images: [
                { type: "image", src: "/imgs/black-boy-playing-guitar_1.jpg" },
                { type: "image", src: "/imgs/black-boy-playing-guitar_2.jpg" },
                { type: "image", src: "/imgs/black-boy-playing-guitar_3.jpg" },
            ],
            distance: "3",
        },
        {
            name: "Ana",
            bio: "Cantora apaixonada por rock e música brasileira.",
            skills: ["Compositora", "Vocalista"],
            images: [
                { type: "image", src: "/imgs/white-girl-singing_1.jpg" },
                { type: "image", src: "/imgs/white-girl-singing_2.jpg" },
                { type: "image", src: "/imgs/white-girl-singing_3.jpg" },
                { type: "image", src: "/imgs/white-girl-singing_4.jpg" }
            ],
            distance: "1",
        },
        {
            name: "David",
            bio: "Baterista já há 5 anos interessado em juntar uma banda de rock progressivo.",
            skills: ["Baterista", "Vocalista"],
            images: [
                { type: "image", src: "/imgs/latino-guy-playing-drum_1.jpg" },
                { type: "image", src: "/imgs/latino-guy-playing-drum_2.jpg" },
                { type: "image", src: "/imgs/latino-guy-playing-drum_3.jpg" }
            ],
            distance: "7",
        },
    ];

    const [cards, setCards] = useState(cardsData);
    const {history, addSwipe} = useSwipeHistory();

    //Ref for top card so buttons can trigger swipe
    const topCardRef = useRef<DraggableCardHandle | null>(null);

    //Remove top card after swipe animation ends
    const handleRemoveTop = (card: MusicianCardData, action: "match" | "pass") => {
        addSwipe(card, action); //save history
        setCards((prev) => prev.slice(1)); //remove top card
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