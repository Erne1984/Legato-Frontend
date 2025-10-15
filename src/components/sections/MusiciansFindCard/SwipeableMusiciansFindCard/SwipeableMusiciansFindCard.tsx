"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./SwipeableMusiciansFindCard.module.css"

// Props for the SwipeableCard component
type SwipeableCardProps = {
    direction: "left" | "right" | null; //direction to animate
    onAnimationEnd: () => void; // callback after animation ends
    onMatch: () => void; //called when card is matched (swiped right)
    onPass: () => void; // called when card is passed (swiped left)
    children: React.ReactNode; // Whatever contet you want inside the card
};

/**
 * A reusable swipeable container similar to Tinder cards.
 * Handles drag interaction (mouse-based),
 * Programmatic animations (triggered from buttons),
 * animates left/right swipe, and calls callbacks when triggered.
 */

export default function SwipeableCard({ direction, onAnimationEnd, children, onMatch, onPass }: SwipeableCardProps) {
    // Track whether user is currently dragging
    const [isDragging, setIsDragging] = useState(false);
    // Track horizontal offset during drag
    const [offsetX, setOffsetX] = useState(0);
    // Store which animation is currently playing ("none", "pass", or "match")
    const [animation, setAnimation] = useState<"none" | "pass" | "match">("none");

    // Remember the X starting position of the drag
    const startX = useRef<number | null>(null);

    //When direction changes, trigger animation class (form buttons)
    useEffect(() => {
        if(direction === "left") {
            triggerSwipe("pass");
        } else if (direction === "right"){
            triggerSwipe("match");
        }
    }, [direction]);


    /**
     * Handles logic for triggering a swipe animation
     * Used by both drag and button triggers
     */
    const triggerSwipe = (type: "pass" | "match") => {
        setAnimation(type);
        //Call the corresponding callback
        if(type === "pass") onPass?.();
        if(type === "match") onMatch?.();
        
        //Reset after the animation finishes
        setTimeout(() =>{
            setAnimation("none");
            setOffsetX(0);
            onAnimationEnd?.();
        }, 600); //match the CSS animation duration
    };



    // Mouse Events

    // When the user starts dragging  
    const handleMouseDown = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        setIsDragging(true);
    };

    // When the user moves the mouse while dragging
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || startX.current === null) return;
        const deltaX = e.clientX - startX.current;
        setOffsetX(deltaX);
    };

    // When the user releases the mouse button (ends drag)
    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 150; // Minimum distance to trigger pass/match

        if (offsetX > threshold) {
            //Swiped right - "Match"
            triggerSwipe("match");
            onMatch?.(); //Call callback if provided 
        } else if (offsetX < -threshold) {
            // Swiped left - "Pass"
            triggerSwipe("pass");
            onPass?.();
        } else {
            // Didn't move far enough - reset to center
            setOffsetX(0);
            // setAnimation("none");
            // return;
        }

        // After animation ends, reset card position
        setTimeout(() => {
            setOffsetX(0);
            // setAnimation("none");
        }, 600);
    }

    return (
        <>
        <div
            // Apply conditional animation classes
            className={`${styles.swipeable_card} 
                ${animation === "pass" ? styles.swipe_left : ""}
                ${animation === "match"? styles.swipe_right: ""}
            `}
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
        </>
    );
}