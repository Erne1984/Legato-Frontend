"use client";

import React, { useState } from "react"
import styles from './CarouselMusiciansFindCard.module.css'
import Icon from '@/components/ui/Icon/Icon'
import Slider from "react-slick";

type SlideItem = {
    type: "image" | "video";
    src: string;
    distance?: string;
};

type CarouselCardProps = {
    slides: SlideItem[];
    name: string;
    skills: string[];
};

export default function CarouselMusiciansFindCard({ slides, name, skills }: CarouselCardProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    console.log(slides);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        arrows: true,
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
    };

    function CustomArrow({
        className,
        style,
        onClick,
        direction,
    }: {
        className?: string;
        style?: React.CSSProperties;
        onClick?: () => void;
        direction: "left" | "right";
    }) {
        return (
            <div
                className={`${styles.custom_arrow} ${styles[direction]}`}
                style={style}
                onClick={onClick}
            />
        );
    }
    return (
        <>
            <div className={styles.image_container_section_card}>
                {/* Carousel Find Musicians */}
                <div className={styles.carousel_background}>
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className={styles.slide_item}>
                                {slide.type === "video" ? (
                                    <video
                                        className={styles.background_media}
                                        src={slide.src}
                                        autoPlay
                                        loop
                                        muted
                                    />
                                ) : (
                                    <div
                                        className={styles.background_media}
                                        style={{ backgroundImage: `url(${slide.src})` }}
                                    />
                                )}
                            </div>
                        ))}
                    </Slider>
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
                    </div>
                </div>


                {/* Progress Slider Bar */}
                <div className={styles.progress_bar}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.progress_dot} 
                        ${index === currentSlide ? styles.active_dot : ""}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

