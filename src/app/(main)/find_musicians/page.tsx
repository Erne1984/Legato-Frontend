"use client";

import { useState } from "react";
import StackMusiciansFindCard from "@/components/sections/MusiciansFindCard/StackMusiciansFindCard/StackMusiciansFindCard";
import { SwipeHistoryProvider } from "@/context/SwipeHistoryContext";
import styles from "./FindMusicians.module.css";
import SwipeHistoryButton from "@/components/sections/MusiciansFindCard/SwipeHistory/SwipeHistoryButton/SwipeHistoryButton";
import { CardType } from "@/types/cards";


export default function FindMusicians() {


    const initialCards: CardType[] = [
        {
            name: "Renan",
            bio: "Sou cantor e compositor, apaixonado por transformar sentimentos em música.",
            skills: ["Vocalista", "Guitarrista"],
            image_profile: { type: "image", src: "/imgs/black_boy_profile_image.png" },
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
            image_profile: { type: "image", src: "/imgs/white_girl_image_profile.png" },
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
            image_profile: { type: "image", src: "/imgs/latino_guy_image_profile.png" },
            images: [
                { type: "image", src: "/imgs/latino-guy-playing-drum_1.jpg" },
                { type: "image", src: "/imgs/latino-guy-playing-drum_2.jpg" },
                { type: "image", src: "/imgs/latino-guy-playing-drum_3.jpg" }
            ],
            distance: "7",
        },
    ];

    const [cards, setCards] = useState<CardType[]>(initialCards);

    const handleUndoCard = (card: CardType) => {
        setCards((prev) => [card, ...prev]); 
    };


    return (
        <>
            <SwipeHistoryProvider>
                <div className={styles.top_section}>
                    <div className={styles.introduction_container}>
                        <h2 className={styles.title}>Encontrar Músicos</h2>
                        <h4 className={styles.subtitle}>Procure músicos ou produtores próximos a você!</h4>
                    </div>
                    <div className={styles.button_container}>
                        <SwipeHistoryButton onUndo={handleUndoCard} />
                    </div>
                </div>
                <div className={styles.find_musicians_card_section}>
                    <StackMusiciansFindCard
                        cards={cards}
                        setCards={setCards}
                    />
                </div>
                <div className={styles.container_description}>
                    <p className={styles.text_description}>Arraste o card para a esquerda para ignorar, ou para a direita para conversar</p>
                </div>
            </SwipeHistoryProvider>
        </>
    );
}