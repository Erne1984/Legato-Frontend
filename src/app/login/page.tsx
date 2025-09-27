import styles from "./LoginPage.module.css";
import AuthForm from "@/components/sections/AuthForm/AuthForm";

export default function Login() {
  return (
    <div className={styles.login_page}>
      <AuthForm type="login" />
    </div>
  );
}
