"use client";

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from "./DraggableMusiciansFindCard.module.css"
import SwipeOverlay from "../SwipeOverlayMusiciansFindCard/SwipeOverlayMusiciansFindCard";

//Define the type for methods we want to expose to parent via ref

export type DraggableCardHandle = {
    triggerSwipe: (direction: "left" | "right") => void;
};

//Props for the DraggableCard component
type DraggableCardProps = {
    onPass: () => void; //Called when the card is swiped left
    onMatch: () => void; //Called when the card is swiped right
    children: React.ReactNode; //Content of the card
}

//Forward ref so parent can trigger swipe programmatically
const DraggableCard = forwardRef<DraggableCardHandle, DraggableCardProps>(
  (props, ref) => { 
    const { onPass, onMatch, children } = props;

    // State and refs for drag logic

    const [isDragging, setIsDragging] = useState(false); //Is the user currently dragging?
    const [offsetX, setOffsetX] = useState(0); //Horizontal offset during drag
    const [animation, setAnimation] = useState<"none" | "left" | "right">("none"); //Current animation type
    const startX = useRef<number | null>(null); //X position where drag started

    // Expose triggerSwipe method to parent (for buttons)
    useImperativeHandle(ref, () => ({
        triggerSwipe: (direction: "left" | "right") => {
            animateSwipe(direction);
        },
    }));

    // Function to animate swipe programmatically
    const animateSwipe = (direction: "left" | "right") => {
        // Update offsetX so overlay reacts
        setOffsetX(direction === "left" ? -300 : 300); //pick a value larger than threshold

        //Trigger aniamtion class
        setAnimation(direction);

        //Wait for animation to finish before calling callback
        setTimeout(() => {
            if(direction === "left") onPass();
            if(direction === "right") onMatch();

            //Reset state
            setAnimation("none");
            setOffsetX(0);
        }, 600); // Match CSS animation duration
    };

    //Drag event handlers
    const handleStart = (clientX: number) => {
        startX.current = clientX;
        setIsDragging(true);
    };

    const handleMove = (clientX: number) => {
        if (!isDragging || startX.current === null) return;
        setOffsetX(clientX - startX.current);
    }

    const handleEnd = () => {
        if(!isDragging) return;
        setIsDragging(false);

        const threshold = 120; // Minimum distance to trigger swipe

        if (offsetX > threshold) animateSwipe("right");
        else if (offsetX < -threshold) animateSwipe("left");
        else setOffsetX(0); // Not far enough, reset position
    };

    //Prevent page scrolling while dragging
        useEffect(() => {
      const preventScroll = (e: Event) => {
        if (isDragging) e.preventDefault();
      };

      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("mousemove", preventScroll, { passive: false });
      document.addEventListener("wheel", preventScroll, { passive: false });

      return () => {
        document.removeEventListener("touchmove", preventScroll);
        document.removeEventListener("mousemove", preventScroll);
        document.removeEventListener("wheel", preventScroll);
      };
    }, [isDragging]);

    // Render draggable card
    return (
        <div
            className={`${styles.swipeable_card} 
            ${animation === "left" ? styles.swipe_left: ""}
            ${animation === "right" ? styles.swipe_right : ""}`}
            style={{
                transform:
                    isDragging && animation === "none"
                    ? `translateX(${offsetX}px) rotate(${offsetX / 20}deg)`
                    : undefined,
                transition: isDragging ? "none" : "transform 0.6 ease",
            }}
            //Mouse events
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            //Touch events
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
        >
            {/* Overlay that reacts dynamically to offsetX */}
            <SwipeOverlay offsetX={offsetX} />

            {/* Actual content of the card */}
            {children}
        </div> 
    );
  }
);

DraggableCard.displayName = "DraggableCard";

export default DraggableCard;
