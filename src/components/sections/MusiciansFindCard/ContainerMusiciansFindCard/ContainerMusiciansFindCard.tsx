import styles from "./ContainerMusiciansFindCard.module.css"
import Icon from "@/components/ui/Icon/Icon"
import CarrouselCard from "../CarrouselMusiciansFindCard/CarrouselMusiciansFindCard"

export default function MusiciansFindCard() {
    const mediaItems = [
        {type: "image", src: "../../../../../public/imgs/black-boy-playing-guitar_1.jpg"},
        {type: "image", src: "../../../../../public/imgs/black-boy-playing-guitar_2.jpg"},
        {type: "image", src: "../../../../../public/imgs/black-boy-playing-guitar_3.jpg"},
        {type: "string", src: "Renan"},
        {type: "string", src: "Vocalista"},
        {type: "string", src: "Guitarrista"}
    ]
    return (
        <>
            <div className={styles.pass_musician_button}>
                <Icon name="close" className={styles.x_icon}></Icon>
            </div>
            <div className={styles.container_card}>
                <CarrouselCard />
                <div className={styles.description_container_card}>

                    <p className={styles.musician_bio}>
                        Sou cantor e compositor, apaixonado por transformar sentimentos em música. Misturo influências modernas e populares para criar um som autêntico e cheio de emoção.
                    </p>
                    <div className={styles.musician_skills}>
                        <div className={styles.musician_skills_title}>Habilidades</div>
                        <div className={styles.musician_skills_item}>Vocalista</div>
                        <div className={styles.musician_skills_item}>Guitarrista</div>
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
            <div className={styles.match_musician_button}>
                <Icon name="link" className={styles.link_icon}></Icon>
            </div>
        </>
    );
}