"use client";

import React, { useRef, useState } from "react"
import styles from './CarouselMusiciansFindCard.module.css'
import Icon from '@/components/ui/Icon/Icon'

type SlideItem = {
    type: "image" | "video";
    src: string;
};

type CarouselCardProps = {
    slides: SlideItem[];
    name: string;
    skills: string[];
};

export default function CarouselMusiciansFindCard({
    slides,
    name,
    skills
}: CarouselCardProps) {
    // Active estate slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go for the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length); //loop infinito
    };

    // Function to go for the prev slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + + slides.length) % slides.length); //loop infinito
    }

    return (
        <div className={styles.carousel_container}>
            {/* Slides */}
            <div className={styles.slider_wrapper}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                    >
                        {slide.type === "video" ? (
                            <video
                                className={styles.media}
                                src={slide.src}
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <div
                                className={styles.media}
                                style={{ backgroundImage: `url(${slide.src})` }}
                            />
                        )}
                    </div>
                ))}

                {/* Manual arrow */}
                <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
                    <Icon name="LeftArrow" className={styles.leftArrowIcon}></Icon>
                </button>
                <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
                    <Icon name="RightArrow" className={styles.rightArrowIcon}></Icon>
                </button>
            </div>


            {/* Musician info */}
            <div className={styles.overlay_content}>
                <p className={styles.distance_tag}>
                    <Icon name="mapPin" className={styles.mapPin_icon}></Icon> 3km
                </p>
                <div className={styles.container_intro_info}>
                    <h1 className={styles.musician_name}>
                        {name}
                    </h1>
                    <div className={styles.musician_skills}>
                        {skills.map((skill, i) => (
                            <div key={i} className={styles.musician_skills_item}>
                                {skill}
                            </div>
                        ))}
                    </div>
                    <div className={styles.description}>
                        Role para baixo e veja mais informações
                    </div>
                </div>
            </div>


            {/* Progress Slider Bar */}
            {/* Barra de progresso estilo stories */}
            <div className={styles.stories_progress_container}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={styles.story_bar_wrapper}
                    >
                        <div
                            key={`${index}-${currentSlide}`}
                            className={`${styles.story_bar_fill} ${index < currentSlide
                                ? styles.filled
                                : index === currentSlide
                                    ? styles.bar_active
                                    : ""
                                }`}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

