import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import styles from "./DiscoverMusiciansSection.module.css";
import MusicianCard from "./MusicianCard";

export default function DiscoverMusiciansSection() {

    const img = "https://static.dw.com/image/54104210_605.jpg";

  return (
    <section className={styles.container_discover}>
      <h1>Pronto para encontrar <br/><span className={styles.highlight}>sua próxima banda?</span></h1>

      <p className={styles.subtitle_discovery}>
        Junte-se a milhares de músicos que já encontraram seus parceirosmusicais ideais.
      </p>

      <div className={styles.container_musician_cards}>
        <MusicianCard imgUrl={img}/>
        <MusicianCard imgUrl={img}/>
        <MusicianCard imgUrl={img}/>
      </div>

      <PrimaryButton content="Descobrir musicos" size="large"  />
    </section>
  );
}
