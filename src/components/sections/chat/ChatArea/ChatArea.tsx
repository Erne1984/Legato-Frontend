"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "./ChatArea.module.css";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export type MessageType = {
  from: "me" | "user";
  text: string;
  time: string;
};

type ChatAreaProps = {
  messages: MessageType[];
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  username?: string;
  lastSeen?: string;
  avatarUrl?: string;
  onToggleSidebar?: () => void;
};

export default function ChatArea({
  messages,
  message,
  setMessage,
  username = "Usuário",
  lastSeen = "visto há 2 horas",
  avatarUrl = "https://static.todamateria.com.br/upload/ar/is/aristoteles-cke.jpg",
  onToggleSidebar,
}: ChatAreaProps) {
  return (
    <section className={styles.chat_area}>
      <ChatHeader
        username={username}
        lastSeen={lastSeen}
        avatarUrl={avatarUrl}
        onToggleSidebar={onToggleSidebar}
      />
      <ChatMessages messages={messages} />
      <ChatInput message={message} setMessage={setMessage} />
    </section>
  );
}
