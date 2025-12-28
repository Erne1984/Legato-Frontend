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
    gender: string | null;
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
                <div className={styles.container_card}>
                    <CarouselCard
                        slides={slides}
                        name={name}
                        skills={skills}
                        distance={distance}
                        age={age}
                    />

                    <div className={styles.description_container_card}>
                        <p className={styles.musician_bio}>{bio}</p>

                        <div className={styles.musician_skills}>
                            <div className={styles.musician_skills_title}>Gêneros Musicais</div>
                            {musicGenres.map((genre, index) => (
                                <div key={`${genre}-${index}`} className={styles.musician_skills_item}>
                                    {genre}
                                </div>
                            ))}
                        </div>

                        <div className={styles.musician_skills}>
                            <div className={styles.musician_skills_title}>Gênero</div>
                            <div className={styles.musician_skills_item}>{gender}</div>
                        </div>

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