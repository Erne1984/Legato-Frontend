import Image from "next/image";
import styles from "./HeaderLanginPage.module.css";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton/SecondaryButton";

export default function HeaderLanginPage() {
  return (
    <header className={styles.container_wrapper}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <Image
            src="/logo/Logo_Legato_Roxo.png"
            width={90}
            height={90}
            alt="Logo legato"
          />
        </div>

        <div className={styles.login_area}>
          <SecondaryButton content="Entrar" />

          <PrimaryButton content="Inscrever-se" />
        </div>
      </div>
    </header>
  );
}
