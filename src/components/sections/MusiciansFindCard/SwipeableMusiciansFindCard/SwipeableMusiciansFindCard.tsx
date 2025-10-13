"use client";

import React, { useState, useRef } from "react";
import styles from "./SwipeableMusiciansFindCard.module.css"

// Props for the SwipeableCard component
type SwipeableCardProps = {
    children: React.ReactNode; // Whatever contet you want inside the card
    onMatch?: () => void; //Callback when swiped right
    onPass?: () => void; //Callback when swiped left
};

/**
 * A reusable swipeable container similar to Tinder cards.
 * Handles drag interaction (mouse-based for now),
 * animates left/right swipe, and calls callbacks when triggered.
 */

export default function SwipeableCard({ children, onMatch, onPass }: SwipeableCardProps) {
    // Track whether user is currently dragging
    const [isDragging, setIsDragging] = useState(false);
    // Track horizontal offset during drag
    const [offsetX, setOffsetX] = useState(0);
    // Store which animation is currently playing ("none", "pass", or "match")
    const [animation, setAnimation] = useState<"none" | "pass" | "match">("none");

    // Remember the X starting position of the drag
    const startX = useRef<number | null>(null);

    // Event Handlers

    // When the user starts dragging  
    const handleMouseDown = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        setIsDragging(true);
    }

    // When the user moves the mouse while dragging
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || startX.current === null) return;
        const deltaX = e.clientX - startX.current;
        setOffsetX(deltaX);
    }

    // When the user releases the mouse button (ends drag)
    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 150; // Minimum distance to trigger pass/match

        if (offsetX > threshold) {
            //Swiped right - "Match"
            setAnimation("match");
            onMatch?.(); //Call callback if provided 
        } else if (offsetX < -threshold) {
            // Swiped left - "Pass"
            setAnimation("pass");
            onPass?.();
        } else {
            // Didn't move far enough - reset to center
            setOffsetX(0);
            setAnimation("none");
            return;
        }

        // After animation ends, reset card position
        setTimeout(() => {
            setOffsetX(0);
            setAnimation("none");
        }, 600);
    }

    return (
        <div
            // Apply conditional animation classes
            className={`${styles.swipeable_card} 
            ${animation === "pass"
                    ? styles.swipe_left
                    : animation === "match"
                        ? styles.swipe_right
                        : ""
                }`}
            // Mouse event handlers
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            // Apply transform while dragging for smooth movement
            style={{
                transform:
                    isDragging && animation === "none"
                        ? `translateX(${offsetX}px) rotate(${offsetX / 20}deg)`
                        : undefined,
                transition: isDragging ? "none" : "transform 0.3s ease",
            }}
        >

            {/* The actual content of the card (passed as children) */}
            {children}
        </div>
    );
}