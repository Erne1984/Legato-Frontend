"use client";
import styles from "./ChatArea.module.css";
import Icon from "@/components/ui/Icon/Icon";
import { Dispatch, SetStateAction } from "react";

type ChatInputProps = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

export default function ChatInput({ message, setMessage }: ChatInputProps) {
  return (
    <div className={styles.input_area}>
      <input
        type="text"
        placeholder="Digite uma mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={styles.input_icons}>
        <Icon name="image" size={20} />
        <Icon name="send" size={20} />
      </div>
    </div>
  );
}
