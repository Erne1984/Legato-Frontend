"use client";

import Image from "next/image";
import styles from "./HeaderLanginPage.module.css";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton/SecondaryButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

import logo from "../../../assets/logo/logo-legato.png"

export default function HeaderLanginPage() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToSignup = () => {
    router.push("/signup");
  };

  return (
    <header className={styles.container_wrapper}>
      <div className={styles.container}>

        <Link href={"/"}>
          <div className={styles.logo_box}>
            <Image
              src={logo}
              width={90}
              height={90}
              alt="Logo legato"
            />
          </div>
        </Link>

        <div className={styles.login_area}>
          <SecondaryButton content="Entrar" onClick={navigateToLogin} />
          <PrimaryButton content="Inscrever-se" onClick={navigateToSignup} />
        </div>
      </div>
    </header>
  );
}
