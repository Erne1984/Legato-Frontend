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
            onPass();
        } else if (direction === "right"){
            triggerSwipe("match");
            onMatch();
        }
    }, [direction, onMatch, onPass]);

    //When animation ends (CSS animation completed)
    const handleAnimationEnd = () => {
        setAnimation("none");
        setOffsetX(0);
        onAnimationEnd();
    };

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
        endDrag();
    };

    // Touch Event Handlers (Mobile)

    //When finger touches the screen
    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
        setIsDragging(true);
    };

    //When finger moves on screen
    const handleTouchMove = (e: React.TouchEvent) => {
        if(!isDragging || startX.current === null) return;
        const deltaX = e.touches[0].clientX - startX.current;
        setOffsetX(deltaX);
    };

    //When finger is lifted off the screen
    const handleTouchEnd = () => {
        if (!isDragging) return;
        endDrag();
    };

    // Shared drag end logic for both mouse and touch
    const endDrag = () => {
        setIsDragging(false);

        const threshold = 120; //distance to trigger swipe

        if(offsetX > threshold){
            // Swiped right -> Match
            setAnimation("match");
            onMatch?.();
        }else if(offsetX < -threshold){
            // Swiped left -> Pass
            setAnimation("pass");
            onPass?.();
        } else {
            //Reset if not far enough
            setOffsetX(0);
            setAnimation("none");
            return;
        }

        // Reset card after animarion finishes
        setTimeout(() => {
            setOffsetX(0);
            setAnimation("none");
        }, 600);
    };

    return (
        <>
        <div
            // Apply conditional animation classes
            className={`${styles.swipeable_card} 
                ${animation === "pass" ? styles.swipe_left : ""}
                ${animation === "match"? styles.swipe_right: ""}`}
            onAnimationEnd={handleAnimationEnd}    
            // Mouse event handlers (desktop)
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            // Touch events (mobile)
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            // Transform while dragging
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