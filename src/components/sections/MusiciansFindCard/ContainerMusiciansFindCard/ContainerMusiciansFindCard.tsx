"use client";
import { useState } from "react";
import styles from "./ContainerMusiciansFindCard.module.css"
import Icon from "@/components/ui/Icon/Icon"
import CarouselCard from "../CarouselMusiciansFindCard/CarouselMusiciansFindCard"
import SwipeableCard from "../SwipeableMusiciansFindCard/SwipeableMusiciansFindCard";
import SwipeButtons from "../SwipeButtonsMusiciansFindCard/SwipeButtonsMusiciansFindCard";


export default function MusiciansFindCard() {
    //Local state to store which direction to animate
    // "left" -> pass | "right" -> match | null -> idle
    const[swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);

    const mediaItems: { type: "image" | "video"; src: string }[] = [
        { type: "image", src: "/imgs/black-boy-playing-guitar_1.jpg" },
        { type: "image", src: "/imgs/black-boy-playing-guitar_2.jpg" },
        { type: "image", src: "/imgs/black-boy-playing-guitar_3.jpg" }
    ]

    //Example content
    const name = "Renan";
    const skills = ["Vocalista", "Guitarrista"];

    // Function called when user swipes left or presses the pass button
    const handlePass = () => {
        setSwipeDirection("left");//trigger animation to the left
    };

    // Function called when user swipes right or presses the match button
    const handleMatch = () => {
        setSwipeDirection("right");//trigger animation to the right
    };

    //Once animation finishes, reset the state
    const handleAnimationEnd = () => {
        setSwipeDirection(null);
    };

    return (
        <>
            <div className={styles.card_wrapper}>
                {/* Swipeable wrapper around the main card */}
                <SwipeableCard
                    direction={swipeDirection}
                    onAnimationEnd={handleAnimationEnd}
                    onPass={handlePass}
                    onMatch={handleMatch}
                >
                    <div className={styles.container_card}>
                        {/* Carousel inside the card */}
                        <CarouselCard
                            slides={mediaItems}
                            name={name}
                            skills={skills}
                        />

                        {/* Musician info section */}
                        <div className={styles.description_container_card}>
                            <p className={styles.musician_bio}>
                                Sou cantor e compositor, apaixonado por transformar sentimentos em música. Misturo influências modernas e populares para criar um som autêntico e cheio de emoção.
                            </p>

                            {/* Skills */}
                            <div className={styles.musician_skills}>
                                <div className={styles.musician_skills_title}>Habilidades</div>
                                <div className={styles.musician_skills_item}>Vocalista</div>
                                <div className={styles.musician_skills_item}>Guitarrista</div>
                            </div>

                            {/* Common artists */}
                            <div className={styles.musician_common_artists}>
                                <div className={styles.musician_commom_artists_title}>Artistas em comum</div>
                                <div className={styles.musician_commom_artists_container}>
                                    <div className={styles.musician_commom_artists_item}></div>
                                    <div className={styles.musician_commom_artists_item}></div>
                                    <div className={styles.musician_commom_artists_item}></div>
                                    <div className={styles.musician_commom_artists_item_more}>
                                        <Icon name="plus" className={styles.plus_icon}></Icon>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className={styles.view_profile_button}>
                                    Ver Perfil Completo
                                </p>
                            </div>
                        </div>
                    </div>
                </ SwipeableCard>
                                    {/* Resuable Swipe Buttons (match/pass) */}
                    <SwipeButtons onPass={handlePass} onMatch={handleMatch} />
            </div>
        </>
    );
}