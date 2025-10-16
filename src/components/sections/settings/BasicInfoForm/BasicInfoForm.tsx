import InputField from "@/components/ui/InputField/InputField";
import styles from "./BasicInfoForm.module.css";

export default function BasicInfoForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Informações Básicas</h2>

      <div className={styles.row}>
        <InputField
          label="Nome"
          name="name"
          placeholder="Digite seu nome artístico"
          type="text"
        />
        <InputField
          label="Username"
          name="username"
          placeholder="Digite seu nome de usuário"
          type="text"
        />
      </div>

      <div className={styles.textareaField}>
        <label className={styles.textarea_label}>Sua Bio</label>
        <textarea  rows={4} placeholder="Escreva uma breve descrição do seu trabalho artístico" />
      </div>
    </div>
  );
}
