"use client";
import InputField from "@/components/ui/InputField/InputField";
import styles from "./AuthForm.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import GoogleButton from "@/components/ui/GoogleButton/GoogleButton";
import WarningModal from "@/components/ui/WarningModal/WarningModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin, useRegister } from "@/hooks/useAuth";

type AuthFormProps = {
  type: "login" | "signup";
};

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const router = useRouter();
  const isLogin = type === "login";

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const [warning, setWarning] = useState({ show: false, message: "" });


  const handleLogin = () => {
    loginMutation.mutate({
      email,
      password,
    },
    {
      onError: () => {
        setWarning({
          show:true,
          message: "Usuário ou senha inválidos!",
        });
      }
    }
    );
  };

  const handleRegister = () => {
  // Checagem de campos obrigatórios
  if (!email || !password || !confirmPassword || !username || !displayName) {
    setWarning({
      show: true,
      message: "Por favor, preencha todos os campos obrigatórios!",
    });
    return;
  }

  if (!acceptTerms) {
    setWarning({
      show: true,
      message: "Você precisa aceitar os termos para continuar.",
    });
    return;
  }

  if (password !== confirmPassword) {
    setWarning({
      show: true,
      message: "As senhas não coincidem!",
    });
    return;
  }

  registerMutation.mutate(
    {
      email,
      password,
      role: "USER",
      username,
      displayName,
    },
    {
      onError: (error: any) => {
        const message =
          error?.response?.data?.message ||
          "Erro ao registrar! Este email já está sendo utilizado.";
        setWarning({ show: true, message });
      },
      onSuccess: () => {
        setWarning({ show: true, message: "Registro realizado com sucesso!" });
      },
    }
  );
};


  const navigateToLogin = () => router.push("/login");
  const navigateToSignup = () => router.push("/signup");
  const navigateToResetPassword = () => router.push("/reset_password");

  return (
    <>
      <div className={styles.auth_form}>
        <h2>{isLogin ? "Login" : "Cadastro"}</h2>

        {!isLogin && (
          <InputField
            label="Username"
            placeholder="Seu @username único"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}

        {!isLogin && (
          <InputField
            label="Display Name"
            placeholder="Como você quer aparecer?"
            name="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
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
          <p className={styles.forgot_password} onClick={navigateToResetPassword}>
            Esqueceu a senha?
          </p>
        ) : (
          <>
            <InputField
              label="Confirmar Senha"
              placeholder="Confirme sua senha"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={isLogin ? handleLogin : handleRegister}
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

      <WarningModal 
        show={warning.show}
        message={warning.message}
        onClose={() => setWarning({ ...warning, show: false})}
      />
    </>
  );
}