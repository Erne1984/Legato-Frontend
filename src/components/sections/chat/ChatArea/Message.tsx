import styles from "./ChatArea.module.css";
import { MessageType } from "@/types/MessageType";

type MessageProps = {
  msg: MessageType;
};

export default function Message({ msg }: MessageProps) {
  return (
    <div
      className={`${styles.message} ${
        msg.from === "me" ? styles.me : styles.user
      }`}
    >
      <p>{msg.text}</p>
      <span className={styles.timestamp}>{msg.time}</span>
    </div>
  );
}
