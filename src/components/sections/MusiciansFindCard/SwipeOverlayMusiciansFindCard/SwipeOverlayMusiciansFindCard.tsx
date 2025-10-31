"use client";
import React from "react";
import styles from "./SwipeOverlayMusiciansFindCard.module.css";
import Icon from "@/components/ui/Icon/Icon";

type SwipeOverlayProps = {
    offsetX: number; //current drag distance
}


export default function SwipeOverlay({ offsetX }: SwipeOverlayProps) {
    //Define how much opacity increases with drag distance
    const opacity = Math.min(Math.abs(offsetX) / 150, 1);

    //Deterine if we're swiping left or right
    const isRight = offsetX > 0;
    const isLeft = offsetX < 0;

    //Pick icon name based on direction
    const iconName = isRight ? "link" : isLeft ? "close" : null;

    //Pick overlay color (green for right, red for left)
    const overlayColor = isRight ? "rgb(0, 255, 0, 0.3)" : isLeft ? "rgba(255, 0, 0, 0.3" : "transparent";

    return (
        <div
            className={styles.overlay}
            style={{
                backgroundColor: overlayColor,
                opacity,
            }}
        >
            <div className={styles.border_icon}>
                {iconName && (
                    <Icon
                        name={iconName}
                        className={styles.overlay_icon}
                    />
                )}
            </div>
        </div>
    );
}