"use client";
import { useState, useRef } from "react";

import ContainerMusiciansFindCard from "../ContainerMusiciansFindCard/ContainerMusiciansFindCard";
import DraggableCard, { DraggableCardHandle } from "../DraggableMusiciansFindCard/DraggableMusiciansFindCard";
import SwipeButtons from "../SwipeButtonsMusiciansFindCard/SwipeButtonsMusiciansFindCard";
import MatchModal from "@/components/ui/MatchModal/MatchModal";
import { useSwipeHistory } from "@/context/SwipeHistoryContext";
import styles from "./StackMusiciansFindCard.module.css"
import { CardType } from "@/types/cards";


type StackCardsMusiciansProps = {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

export default function StackCardsMusicians({ cards, setCards }: StackCardsMusiciansProps) {

  const { addSwipe } = useSwipeHistory();

  //Ref for top card so buttons can trigger swipe
  const topCardRef = useRef<DraggableCardHandle | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [matchedUser, setMatchedUser] = useState<CardType | null>(null);



const handleRemoveTop = (card: CardType, action: "match" | "pass") => {
  if (action === "match") {
    // abrir modal e remover temporariamente o card da stack
    setMatchedUser(card);
    setShowModal(true);
    setCards((prev) => prev.filter((c) => c.name !== card.name));
    
    // **não registrar match ainda**
  } else {
    // Pass: remove e registra no histórico imediatamente
    addSwipe(card, action);
    setCards((prev) => prev.filter((c) => c.name !== card.name));
  }
};


  // cancelar match
  const handleCancelMatch = () => {
    if (matchedUser) {
      setCards((prev) => [matchedUser, ...prev]); // re-adiciona card
      setMatchedUser(null);
      setShowModal(false); // fecha modal
    }
  };

const handleSendMatch = () => {
  if (matchedUser) {
    addSwipe(matchedUser, "match"); // só aqui registra o match
    console.log("Enviar match para:", matchedUser.name);
    
    setMatchedUser(null);
    setShowModal(false);
  }
};






  const handlePass = () => topCardRef.current?.triggerSwipe("left");
  const handleMatch = () => topCardRef.current?.triggerSwipe("right");

  return (
    <>
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
                  transform: `translate(-50%, -50%) translateY(${index * 8}px) scale(${1 - index * 0.05
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
                    age={card.age}
                    gender={card.gender}
                    musicGenres={card.musicGenres}
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

      {/* ✅ Match modal */}
      <MatchModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onCancel={handleCancelMatch} // cancelar re-adiciona card
        onSend={handleSendMatch}     // envia match
        user={matchedUser!}
      />


    </>
  );
}