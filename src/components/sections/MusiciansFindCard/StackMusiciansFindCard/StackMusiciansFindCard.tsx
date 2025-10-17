"use client";
import { useState } from "react";

import ContainerMusiciansFindCard from "../ContainerMusiciansFindCard/ContainerMusiciansFindCard";
import SwipeableCard from "../SwipeableMusiciansFindCard/SwipeableMusiciansFindCard";
import SwipeButtons from "../SwipeButtonsMusiciansFindCard/SwipeButtonsMusiciansFindCard";
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
    //Example stack data - for now just 2 cards
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

    //When user swipes left(pass) or right (match)
    const handleSwipe = (direction: "left" | "right") => {
        console.log("swiped:", direction);
        //remove top card from stack
        setCards((prev) => prev.slice(1));
    }

    //Reset animation (not used heavily here, but needed for SwipeableCard)
    const handleAnimationEnd = () => { }

    return (
        <div className={styles.stack_container}>
            {/* Map cards in reverse so top card has higher z-index */}
            {cards
                .map((card, index) => (
                    <div
                        key={card.name}
                        className={styles.card_layer}
                        style={{
                            zIndex: cards.length - index,
                            transform: `translate(-50%, -50%) translateY(${index * 8
                                }px) scale(${1 - index * 0.05})`,
                        }}
                    >
                        {/* Wrap each card in the swipeable component */}
                        <SwipeableCard
                            direction={null} //initially no animation
                            onPass={() => handleSwipe("left")}
                            onMatch={() => handleSwipe("right")}
                            onAnimationEnd={handleAnimationEnd}
                        >
                            {/* Use the existing single card component */}
                            <ContainerMusiciansFindCard
                                name={card.name}
                                bio={card.bio}
                                skills={card.skills}
                                slides={card.images}
                                distance={card.distance}
                            />
                        </SwipeableCard>
                    </div>
                ))
                .reverse()}

            {/* Swipe buttons remain static at bottom */}
            <SwipeButtons
                onPass={() => handleSwipe("left")}
                onMatch={() => handleSwipe("right")}
            />
        </div>
    );
}