"use client";
import styles from "./ChatArea.module.css";
import Message from "./Message";
import { MessageType } from "./ChatArea";

type ChatMessagesProps = {
  messages: MessageType[];
};

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className={styles.messages}>
      {messages.map((msg, i) => (
        <Message key={i} msg={msg} />
      ))}
    </div>
  );
}
