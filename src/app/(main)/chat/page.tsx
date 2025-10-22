"use client";
import { useState } from "react";
import styles from "./chat.module.css";
import ChatArea from "@/components/sections/chat/ChatArea/ChatArea";

import { MessageType } from "@/types/MessageType";
import SidebarChat from "@/components/sections/chat/SidebarChat/SidebarChat";
import SidebarChatMobile from "@/components/sections/chat/SidebarChat/SidebarChatMobile";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const messages: MessageType[] = [
    { from: "user", text: "Lorem ipsum dolor sit amet", time: "9:46" },
    { from: "me", text: "Consectetur adipiscing elit", time: "9:48" },
    {
      from: "me",
      text: "Vivamus fringilla lacus nec metus bibendum",
      time: "9:50",
    },
  ];

  return (
    <div className={styles.container_chat_wrapper}>
 
        <SidebarChat
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />

        <SidebarChatMobile
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <ChatArea
          onToggleSidebar={() => setIsSidebarOpen(true)}
          messages={messages}
          message={message}
          setMessage={setMessage}
        />
 
    </div>
  );
}
