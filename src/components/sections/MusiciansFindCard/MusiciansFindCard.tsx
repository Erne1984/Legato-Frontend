import styles from "./MusiciansFindCard.module.css"
import Icon from "@/components/ui/Icon/Icon"

export default function MusiciansFindCard() {
    return (
        <>
            <div className={styles.pass_musician_button}>
                <Icon name="close" className={styles.x_icon}></Icon>
            </div>
            <div className={styles.container_card}>
                <div className={styles.image_container_section_card}>
                    <p className={styles.distance_tag}>
                        <Icon name="mapPin" className={styles.mapPin_icon}></Icon> 3km
                    </p>
                    <div className={styles.container_intro_info}>
                        <h1 className={styles.musician_name}>
                            Renan
                        </h1>
                        <div className={styles.musician_skills}>
                            <div className={styles.musician_skills_item}>Vocalista</div>
                            <div className={styles.musician_skills_item}>Guitarrista</div>
                        </div>
                    </div>
                </div>
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