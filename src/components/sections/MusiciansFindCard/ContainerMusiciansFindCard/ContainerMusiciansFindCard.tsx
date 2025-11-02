"use client";
import styles from "./ContainerMusiciansFindCard.module.css"
import Icon from "@/components/ui/Icon/Icon"
import CarouselCard from "../CarouselMusiciansFindCard/CarouselMusiciansFindCard"

type ContainerMusiciansFindCardProps = {
    name: string;
    bio: string;
    skills: string[];
    slides: { type: "image" | "video"; src: string }[];
    distance: number;
    gender: string;
    musicGenres: string[];
    age: number;
};
export default function MusiciansFindCard({
    name,
    bio,
    musicGenres,
    gender,
    skills,
    slides,
    age,
    distance,
}: ContainerMusiciansFindCardProps) {
    return (
        <>
            <div className={styles.card_wrapper}>
                {/* Swipeable wrapper around the main card */}
                <div className={styles.container_card}>
                    {/* Carousel inside the card */}
                    <CarouselCard
                        slides={slides}
                        name={name}
                        skills={skills}
                        distance={distance}
                        age={age}
                    />

                    {/* Musician info section */}
                    <div className={styles.description_container_card}>
                        <p className={styles.musician_bio}>{bio}</p>

                        {/* Music Genres */}
                        <div className={styles.musician_skills}>
                            <div className={styles.musician_skills_title}>Gêneros Musicais</div>
                            {musicGenres.map((genre, index) => (
                                <div key={`${genre}-${index}`} className={styles.musician_skills_item}>
                                    {genre}
                                </div>
                            ))}
                        </div>

                        {/* Gender */}
                        <div className={styles.musician_skills}>
                            <div className={styles.musician_skills_title}>Gênero</div>
                            <div className={styles.musician_skills_item}>{gender}</div>
                        </div>

                        {/* Common artists */}
                        <div className={styles.musician_common_artists}>
                            <div className={styles.musician_commom_artists_title}>Artistas em comum</div>
                            <div className={styles.musician_commom_artists_container}>
                                <div className={styles.musician_commom_artists_item}></div>
                                <div className={styles.musician_commom_artists_item}></div>
                                <div className={styles.musician_commom_artists_item}></div>
                                <div className={styles.musician_commom_artists_item_more}>
                                    <Icon name="plus" className={styles.plus_icon}></Icon>
                                </div>
                            </div>
                        </div>

                        {/* View profile button */}
                        <div>
                            <p className={styles.view_profile_button}>
                                Ver Perfil Completo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}