"use client";
import { useState } from "react";
import styles from "./AuthForm.module.css";
import InputField from "@/components/ui/InputField/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { useRouter } from "next/navigation";

export default function RecoverPasswordForm() {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const navigateToLogin = () => router.push("/login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TO IMPLEMENT YET
    console.log("Recuperar senha para:", email);
  };

  return (
    <div className={styles.auth_form}>
      <h2>Recuperar Senha</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          placeholder="Digite seu e-mail"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <PrimaryButton content="Enviar" fullWidth={true} />
      </form>

      <p className={styles.back_link} onClick={navigateToLogin}>
        Voltar para o <span className={styles.highlight}>login</span>
      </p>
    </div>
  );
}
