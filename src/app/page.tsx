
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

      <ThemeChanger/>

    </div>
  );
}
