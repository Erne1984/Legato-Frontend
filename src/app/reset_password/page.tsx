import RecoverPasswordForm from "@/components/sections/AuthForm/RecoverPasswordForm";
import styles from "./ResetPassword.module.css";


export default function ResetPassword() {

    return(
   <div className={styles.reset_password_page}>
      <RecoverPasswordForm  />
    </div>
    )
}