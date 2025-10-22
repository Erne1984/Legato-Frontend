import Icon from "@/components/ui/Icon/Icon";
import styles from "./SidebarChat.module.css";
import Image from "next/image";

type SidebarChatProps = {
  selectedChat: number | null;
  setSelectedChat: (index: number) => void;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
};

export default function SidebarChat({
  selectedChat,
  setSelectedChat,
  isOpen = false,
  setIsOpen,
}: SidebarChatProps) {
  const chats = [
    { username: "Alice", avatarUrl: "https://static.todamateria.com.br/upload/57/37/573765cb43fa8-baruch-spinoza.jpg",  lastMessage: "Olá, tudo bem?", time: "30min" },
    { username: "Bruno", avatarUrl: "https://static.todamateria.com.br/upload/57/37/573765cb43fa8-baruch-spinoza.jpg", lastMessage: "Reunião às 14h", time: "1h" },
    { username: "Clara", avatarUrl: "https://static.todamateria.com.br/upload/57/37/573765cb43fa8-baruch-spinoza.jpg", lastMessage: "Enviado!", time: "Ontem" },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      onClick={() => setIsOpen && setIsOpen(false)}
    >
      <div className={styles.sidebar_content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.sidebar_title}>Bate Papo</h2>
        <div className={styles.search_box}>
          <Icon name="search" className={styles.search_icon} size={18} />
          <input type="text" placeholder="Pesquisar" />
        </div>
        <ul className={styles.chat_list}>
          {chats.map((chat, i) => (
            <li
              key={i}
              className={`${styles.chat_item} ${selectedChat === i ? styles.selected : ""}`}
              onClick={() => setSelectedChat(i)}
            >
              <Image width={40} height={40} src={chat.avatarUrl} alt={chat.username} className={styles.chat_avatar}/>
              <div className={styles.chat_info}>
                <p className={styles.username}>{chat.username}</p>
                <small>{chat.lastMessage}</small>
              </div>
              <small className={styles.time}>{chat.time}</small>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
