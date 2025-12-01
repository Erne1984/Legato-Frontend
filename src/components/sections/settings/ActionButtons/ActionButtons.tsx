import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import styles from "./ActionButtons.module.css";

type ActionButtonsProps = {
  onSave: () => void;
  disabled?: boolean;
}

export default function ActionButtons({ onSave, disabled }: ActionButtonsProps) {
  return (
    <div className={styles.container}>
      <PrimaryButton 
        content="Salvar" 
        size="medium" 
        onClick={onSave}
        disabled={disabled}
      />
    </div>
  );
}