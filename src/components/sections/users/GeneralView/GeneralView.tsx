import styles from "./Generalview.module.css";
import TagSection from "./TagSection";
import ArtistsSection from "./ArtistsSection";
import BioSection from "./BioSection";
import ObjectiveSection from "./ObjectiveSection";

export default function GeneralView() {
  const skills = ["Guitarrista", "Vocalista", "Compositor"];
  const genres = ["Rock", "MPB", "Indie", "Jazz"];
  return (
    <div className={styles.card}>
      <BioSection />

      <ObjectiveSection />

      <TagSection title="Habilidades" items={skills} />
      <TagSection title="Gêneros Favoritos" items={genres} />

      <ArtistsSection />
    </div>
  );
}
