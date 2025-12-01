import InputField from "@/components/ui/InputField/InputField";
import styles from "./BasicInfoForm.module.css";
import { ChangeEvent, useState } from "react";

type BasicInfoFormsProps = {
  username: string,
  displayName: string,
  bio?: string
}

export default function BasicInfoForm(props: BasicInfoFormsProps) {
  const [displayName, setDisplayName] = useState<string>(props.displayName)
  const [username, setUsername] = useState<string>(props.username)
  const [bio, setBio] = useState<string>(props.bio ? props.bio : "");

  const handleDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Informações Básicas</h2>

      <div className={styles.row}>
        <InputField
          label="Nome"
          name="displayName"
          placeholder="Digite seu nome artístico"
          onChange={handleDisplayNameChange}
          value={displayName}
          type="text"
        />
        <InputField
          label="Username"
          name="username"
          placeholder="Digite seu nome de usuário"
          onChange={handleUsernameChange}
          value={username}
          type="text"
        />
      </div>

      <div className={styles.textareaField}>
        <label className={styles.textarea_label}>Sua Bio</label>
        <textarea rows={4} placeholder="Escreva uma breve descrição do seu trabalho artístico" onChange={handleBioChange} value={bio} />
      </div>
    </div>
  );
}
