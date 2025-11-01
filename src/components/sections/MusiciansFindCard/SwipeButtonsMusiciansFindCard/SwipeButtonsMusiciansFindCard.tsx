"use client";

import React from "react";
import styles from "./SwipeButtonsMusiciansFindCard.module.css"
import Icon from "@/components/ui/Icon/Icon";

type SwipeButtonProps = {
    onPass: () => void;
    onMatch: () => void;
};

export default function SwipeButtons({ onPass, onMatch}: SwipeButtonProps){
    return(
        <>
            <button className={`${styles.swipe_button} ${styles.pass}`} onClick={onPass}>
                <Icon name="close" className={styles.x_icon} />
            </button>

            <button className={`${styles.swipe_button} ${styles.match}`} onClick={onMatch}>
                <Icon name="link" className={styles.link_icon} />
            </button>
        </>
    );
}