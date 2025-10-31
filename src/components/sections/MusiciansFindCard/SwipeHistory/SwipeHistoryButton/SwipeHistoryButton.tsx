"use client";

import React, { useState } from "react";
import SwipeHistoryModal from "../SwipeHistoryModal/SwipeHistoryModal";
import { useSwipeHistory } from "@/context/SwipeHistoryContext";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./SwipeHistoryButton.module.css";

type Props = {
    onUndo: (card: any) => void;
}

export default function SwipeHistoryButton({ onUndo }: Props){
    const [open, setOpen] = useState(false);

     const { history } = useSwipeHistory();

     console.log("Swipe history inside button:", history);

    return (
        <>
            <button
                className={styles.history}
                onClick={() => setOpen(true)}
                aria-label="Abrir histórico de descoberta"
            >
                <Icon name="history" className={styles.history_icon} />
                Histórico
            </button>

            {/* Render modal only when open */}
            {open && <SwipeHistoryModal onClose={() => setOpen(false)} onUndo={onUndo} />}
        </>
    )
}