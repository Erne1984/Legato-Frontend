"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Icon from "../Icon/Icon";

import logo_light from "@/assets/logo/legato_logo_light_version.png";
import logo_dark from "@/assets/logo/legato_logo_dark_version.png";

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image
                src={logo_light}
                width={150}
                height={45}
                alt="Logo Legato"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const currentTheme =
    theme === "dark" || resolvedTheme === "dark" ? "dark" : "light";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandColumn}>
          <Link href={"/"} className={styles.logo}>
            <Image
              src={currentTheme === "dark" ? logo_dark : logo_light}
              width={150}
              height={45}
              alt="Logo Legato"
            />
          </Link>

          <p className={styles.description}>
            Conectando músicos apaixonados e criando oportunidades para
            colaborações musicais incríveis.
          </p>

          <div className={styles.socials}>
            <Icon className={styles.icons} name="instagram" />
            <Icon className={styles.icons} name="facebook" />
          </div>
        </div>

        <div className={styles.linkColumns}>
          <div>
            <h3>Sobre</h3>
            <ul>
              <li><a href="#">Nossa missão</a></li>
              <li><a href="#">Equipe</a></li>
            </ul>
          </div>

          <div>
            <h3>Suporte</h3>
            <ul>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Reportar problema</a></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 Legato. Todos os direitos reservados.
      </div>
    </footer>
  );
}
