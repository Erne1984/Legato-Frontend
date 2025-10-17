import StackMusiciansFindCard from "@/components/sections/MusiciansFindCard/StackMusiciansFindCard/StackMusiciansFindCard";
import styles from "./FindMusicians.module.css";

export default function FindMusicians() {
    return (
        <>
            <h2 className={styles.title}>Encontrar Músicos</h2>
            <h4 className={styles.subtitle}>Procure músicos ou produtores próximos a você!</h4>
            <div className={styles.find_musicians_card_section}>
                <StackMusiciansFindCard />
            </div>
            <div className={styles.container_description}>
                <p className={styles.text_description}>Arraste o card para a esquerda para ignorar, ou para a direita para conversar</p>
            </div>
        </>
    );
}