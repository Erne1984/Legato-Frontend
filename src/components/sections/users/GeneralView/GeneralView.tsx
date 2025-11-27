import styles from "./Generalview.module.css";
import TagSection from "./TagSection";
import ArtistsSection from "./ArtistsSection";
import BioSection from "./BioSection";
import ObjectiveSection from "./ObjectiveSection";

type GeneralViewProps = {
  bio: string,
  goal: string | null,
  skills: string[],
  genres: string[],
}


export default function GeneralView(props: GeneralViewProps) {


  return (
    <div className={styles.card}>
      <BioSection bio={props.bio} />

      <ObjectiveSection goal={props.goal} />

      <TagSection title="Habilidades" items={props.skills} />
      <TagSection title="Gêneros Favoritos" items={props.genres} />

      <ArtistsSection />
    </div>
  );
}
