import { useState } from "react";
import styles from "./SidebarSearch.module.css";
import { MenuItem, SidebarProps } from "../../feed/Sidebar/Sidebar";
import Icon from "@/components/ui/Icon/Icon";


export default function SidebarSearch({ tab }: SidebarProps) {
      const [activeItem, setActiveItem] = useState(tab);
    
      const menuItems: MenuItem[] = [
        { key: "Tudo", icon: "flame", label: "Tudo" },
        { key: "Usuários", icon: "users", label: "Usuários" },
        { key: "Colaborações", icon: "music", label: "Colaborações" },
        { key: "Albuns", icon: "disc", label: "Albuns" },
      ];
    
      const handleItemClick = (key: string) => {
        setActiveItem(key);
      };

    return(
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
    )
}