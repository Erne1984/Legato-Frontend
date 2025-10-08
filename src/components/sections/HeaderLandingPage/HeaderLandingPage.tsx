"use client";

import Image from "next/image";
import styles from "./HeaderLanginPage.module.css";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton/SecondaryButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useTheme } from "next-themes";
import logo_light from "../../../assets/logo/legato_logo_light_version.png";
import logo_dark from "../../../assets/logo/legato_logo_dark_version.png";
import ThemeChanger from "@/components/ui/ThemeChanger/ThemeChanger";
import { useEffect, useState } from "react";

export default function HeaderLanginPage() {
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    if (!mounted) {
    return (
      <Image
        src={logo_light} 
        width={150}
        height={45}
        alt="Logo legato"
      />
    );
  }

  const currentTheme = theme === "dark" || resolvedTheme === "dark" ? "dark" : "light";

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
              src={currentTheme === "dark" ? logo_dark : logo_light}
              width={150}
              height={45}
              alt="Logo legato"
            />
          </div>
        </Link>
        <div className={styles.right_area}>
          <div className={styles.login_area}>
            <SecondaryButton content="Entrar" onClick={navigateToLogin} />
            <PrimaryButton content="Inscrever-se" onClick={navigateToSignup} />
          </div>
          <div className={styles.theme_changer}>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </header>
  );
}
