import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";
import Hero from "../../components/sections/Hero/Hero";
import styles from "./page.module.css";
import DiscoverMusiciansSection from "@/components/sections/DiscoverMusiciansSection/DiscoverMusiciansSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />

      <FeaturesSection/>

      <DiscoverMusiciansSection/>
    </div>
  );
}
