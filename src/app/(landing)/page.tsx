import FeaturesSection from "@/components/sections/landingPage/FeaturesSection/FeaturesSection";
import Hero from "../../components/sections/landingPage/Hero/Hero";
import styles from "./page.module.css";
import DiscoverMusiciansSection from "@/components/sections/landingPage/DiscoverMusiciansSection/DiscoverMusiciansSection";
import Footer from "@/components/ui/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />

      <FeaturesSection />

      <DiscoverMusiciansSection />

      <Footer />
    </div>
  );
}
