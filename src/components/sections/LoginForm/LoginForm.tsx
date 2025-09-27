"use client";
import InputField from "@/components/ui/InputField/InputField";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import GoogleButton from "@/components/ui/GoogleButton/GoogleButton";

export default function LoginForm() {
  const [email, setEmail] = useState<string>();

  return (
    <div className={styles.login_form}>
      
      <h2>Login</h2>

      <InputField
        label="Email"
        placeholder="Digite seu e-mail"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <InputField
        label="Senha"
        placeholder="Digite"
        name="password"
        type="password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <p className={styles.forgot_password}>Esqueceu a senha?</p>

      <PrimaryButton content="Entrar" fullWidth={true} />

      <p className={styles.create_accounte}>Não tem conta? <span className={styles.create_accounte_highlight}>Cadastra-se</span></p>

      <p className={styles.or_divider}>OU</p>

      <GoogleButton/>
    </div>
  );
}
