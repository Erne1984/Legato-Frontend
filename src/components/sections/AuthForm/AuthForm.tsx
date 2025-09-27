"use client";
import InputField from "@/components/ui/InputField/InputField";
import styles from "./AuthForm.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import GoogleButton from "@/components/ui/GoogleButton/GoogleButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  type: "login" | "signup";
};

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const router = useRouter();
  const isLogin = type === "login";

  const navigateToLogin = () => router.push("/login");
  const navigateToSignup = () => router.push("/signup");
  const navigateToResetPassword = () => router.push("/reset_password");

  return (
    <div className={styles.auth_form}>
      <h2>{isLogin ? "Login" : "Cadastro"}</h2>

      {!isLogin && (
        <InputField
          label="Nome"
          placeholder="Digite seu nome"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

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
        placeholder="Digite sua senha"
        name={isLogin ? "password_login" : "password_signup"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {isLogin ? (
        <p className={styles.forgot_password} onClick={navigateToResetPassword} >Esqueceu a senha?</p>
      ) : (
        <>
          <InputField
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            type="password"
            required
          />

          <div className={styles.terms_container}>
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              Aceito os <span className={styles.link}>termos de uso</span> e{" "}
              <span className={styles.link}>política de privacidade</span>
            </label>
          </div>
        </>
      )}

      <PrimaryButton
        content={isLogin ? "Entrar" : "Inscreve-se"}
        fullWidth={true}
      />

      {isLogin ? (
        <p className={styles.create_account}>
          Não tem conta?{" "}
          <span className={styles.highlight} onClick={navigateToSignup}>
            Cadastre-se
          </span>
        </p>
      ) : (
        <p className={styles.create_account}>
          Já tem conta?{" "}
          <span className={styles.highlight} onClick={navigateToLogin}>
            Fazer login
          </span>
        </p>
      )}

      <p className={styles.or_divider}>OU</p>

      <GoogleButton />
    </div>
  );
}
