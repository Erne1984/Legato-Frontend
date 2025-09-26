"use client";
import InputField from "@/components/ui/InputField/InputField";
import styles from "./LoginForm.module.css";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>();

  return (
    <div className={styles.login_form}>
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
    </div>
  );
}
