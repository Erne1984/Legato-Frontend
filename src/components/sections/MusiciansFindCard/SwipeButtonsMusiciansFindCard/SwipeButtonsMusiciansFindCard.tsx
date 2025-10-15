"use client";

import React from "react";
import styles from "./SwipeButtonsMusiciansFindCard.module.css"
import Icon from "@/components/ui/Icon/Icon";

type SwipeButtonProps = {
    // Function triggered when user clicks the "pass" (X) button and its is a callback to trigger pass animation
    onPass: () => void;
    // Function triggered when user clicks the "match" (<3) button and its is a callback to trigger match animation
    onMatch: () => void;
};

/**
 *  A reusable component that displays two circular buttons -
 * one for "pass" (reject) and one for "match" (like).
 * Each triggers a callback when click
 */

export default function SwipeButtons({ onPass, onMatch}: SwipeButtonProps){
    return(
        <>
            {/* PASS button (left side) */}
            <button className={`${styles.swipe_button} ${styles.pass}`} onClick={onPass}>
                <Icon name="close" className={styles.x_icon} />
            </button>

            {/* MATCH button (right side) */}
            <button className={`${styles.swipe_button} ${styles.match}`} onClick={onMatch}>
                <Icon name="link" className={styles.link_icon} />
            </button>
        </>
    );
}