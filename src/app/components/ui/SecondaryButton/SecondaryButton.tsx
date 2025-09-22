import styles from "./SecondaryButton.module.css";

type SecondaryButtonProps = {
    content: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
}

export default function SecondaryButton({ 
    content, 
    onClick, 
    disabled = false, 
    type = "button",
    fullWidth = false 
}: SecondaryButtonProps) {

    return(
        <button 
            className={`${styles.container} ${fullWidth ? styles.fullWidth : ''}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {content}
        </button>
    )
}