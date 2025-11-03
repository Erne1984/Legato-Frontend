import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import styles from "./ColaborationsHeader.module.css";

interface Props {
  onCreate: () => void;
}

export default function ColaborationsHeader({ onCreate }: Props) {
  return (
    <div className={styles.header}>
      <h2>Explorar Colaborações</h2>
      <div className={styles.actions_header}>
        <PrimaryButton content="Nova Colab" onClick={onCreate} />
      </div>
    </div>
  );
}
