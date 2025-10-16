import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import styles from "./ActionButtons.module.css";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";

export default function ActionButtons() {
  return (
    <div className={styles.container}>
      <SecondaryButton content="Cancelar" />

      <PrimaryButton content="Salvar" size="medium" />
    </div>
  );
}
