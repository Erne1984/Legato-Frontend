import MusiciansFindCard from "@/components/sections/MusiciansFindCard/ContainerMusiciansFindCard/ContainerMusiciansFindCard";
import styles from "./FindMusicians.module.css";

export default function FindMusicians(){
    return(
        <div className={styles.find_musicians_card_section}>
              <MusiciansFindCard />
        </div>
    );
}