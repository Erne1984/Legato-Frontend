import { useState } from "react";
import { MenuItem, SidebarProps } from "../../feed/Sidebar/Sidebar";
import styles from "./NotificationsSidebar.module.css";
import Icon from "@/components/ui/Icon/Icon";

export default function NotificationsSidebar({ tab }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(tab);

  const menuItems: MenuItem[] = [
    { key: "Geral", icon: "flame", label: "Geral" },
    { key: "Convites", icon: "users", label: "Convites" },
    { key: "Colaborações", icon: "music", label: "Colaborações" },
  ];

  const handleItemClick = (key: string) => {
    setActiveItem(key);
  };

  return (
    <div>
      <aside className={styles.container}>
        <div className={styles.content}>
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={`${styles.menu_item} ${
                activeItem === item.key ? styles.active : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              <Icon name={item.icon} className={styles.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
