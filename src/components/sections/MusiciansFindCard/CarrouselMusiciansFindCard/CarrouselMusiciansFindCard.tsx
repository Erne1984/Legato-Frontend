import styles from './CarrouselMusiciansFindCard.module.css'
import Icon from '@/components/ui/Icon/Icon'


export default function CarrouselMusiciansFindCard() {
    return(
        <>
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
    </>
    )
}