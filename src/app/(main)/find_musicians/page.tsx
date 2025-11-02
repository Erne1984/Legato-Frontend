"use client";

import { useState } from "react";
import StackMusiciansFindCard from "@/components/sections/MusiciansFindCard/StackMusiciansFindCard/StackMusiciansFindCard";
import { SwipeHistoryProvider, useSwipeHistory } from "@/context/SwipeHistoryContext";
import styles from "./FindMusicians.module.css";
import SwipeHistoryButton from "@/components/sections/MusiciansFindCard/SwipeHistory/SwipeHistoryButton/SwipeHistoryButton";
import FilterMusiciansButton from "@/components/sections/MusiciansFindCard/FilterMusiciansFindCard/FilterMusiciansButton/FilterMusiciansButton";
import { musiciansData } from "@/data/musiciansData";
import { CardType } from "@/types/cards";

export default function FindMusicians() {
    const [allCards] = useState<CardType[]>(musiciansData);
    const [cards, setCards] = useState<CardType[]>(musiciansData);

    return (
        <SwipeHistoryProvider>
            <InnerFindMusicians
                allCards={allCards}
                cards={cards}
                setCards={setCards}
            />
        </SwipeHistoryProvider>
    );
}

function InnerFindMusicians({ allCards, cards, setCards }: any) {
    const { history } = useSwipeHistory();

    const handleUndoCard = (card: CardType) => {
        setCards((prev: CardType[]) => [card, ...prev]);
    };

    const handleApplyFilters = (filters: any) => {
        const availableCards = allCards.filter(
            (card: CardType) => !history.some(h => h.card.name === card.name)
        );

        const filtered: CardType[] = availableCards.filter((m: CardType) => {
            const withinSkills =
                filters.skills.length === 0 ||
                filters.skills.some((s: string) => m.skills.includes(s));

            const matchGender = filters.gender === "Todos" || m.gender === filters.gender;
            const matchAge = m.age >= filters.ageMin && m.age <= filters.ageMax;
            const matchGenre =
                filters.musicGenres.length === 0 ||
                filters.musicGenres.some((g: string) => m.musicGenres.includes(g));
            const matchDistance =
                m.distance >= filters.distanceMin && m.distance <= filters.distanceMax;

            return withinSkills && matchGender && matchAge && matchGenre && matchDistance;
        });

        setCards(filtered);
    };

    const handleResetFilters = () => {
        const remainingCards = allCards.filter(
            (card: CardType) => !history.some(h => h.card.name === card.name)
        );
        setCards(remainingCards);
    };

    return (
        <>
            <div className={styles.top_section}>
                <div className={styles.introduction_container}>
                    <h2 className={styles.title}>Encontrar Músicos</h2>
                    <h4 className={styles.subtitle}>Procure músicos ou produtores próximos a você!</h4>
                </div>

                <div className={styles.button_container}>
                    <FilterMusiciansButton
                        onUndo={handleUndoCard}
                        onApplyFilters={handleApplyFilters}
                        onResetFilters={handleResetFilters} // passa função de reset
                    />
                    <SwipeHistoryButton onUndo={handleUndoCard} />
                </div>
            </div>

            <div className={styles.find_musicians_card_section}>
                {cards.length === 0 ? (
                    <p className={styles.no_cards_message}>
                        Não há mais músicos disponíveis 😔
                    </p>
                ) : (
                    <StackMusiciansFindCard cards={cards} setCards={setCards} />
                )}
            </div>


            <div className={styles.container_description}>
                {cards.length === 0 ? (
                    <p></p>
                ) : (
                    <p className={styles.text_description}>
                        Arraste o card para a esquerda para ignorar, ou para a direita para conversar
                    </p>
                )}

            </div>
        </>
    );
}
