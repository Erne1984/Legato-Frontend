import AuthForm from "@/components/sections/AuthForm/AuthForm";
import styles from "./signup.module.css";

export default function Login() {
  return (
    <div className={styles.signup_page}>
      <AuthForm type="signup" />
    </div>
  );
}
