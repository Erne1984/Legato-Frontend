import Image from "next/image";
import styles from "./GoogleButton.module.css";
import GoogleIcon from "../../../../public/imgs/google-icon.svg";

type GoogleButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export default function GoogleButton({ onClick, disabled = false }: GoogleButtonProps) {
  return (
    <button 
      className={styles.container}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <Image className={styles.icon_google} src={GoogleIcon} alt="Google" width={20} height={20} />
      <span>Entrar com Google</span>
    </button>
  );
}
