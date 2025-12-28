import { useState } from "react";
import styles from "./SidebarSettings.module.css";
import { MenuItem, SidebarProps } from "../../feed/Sidebar/Sidebar";
import Icon from "@/components/ui/Icon/Icon";

export type SidebarSettingsProps = {
  tab: string;
  changeTab: () =>  void;
}


export default function SidebarSettings({ tab, changeTab }: SidebarSettingsProps) {
      const [activeItem, setActiveItem] = useState(tab);
    
      const menuItems: MenuItem[] = [
        { key: "Geral", icon: "settings", label: "Tudo" },
        { key: "Card", icon: "users", label: "Card" }
      ]
    
      const handleItemClick = (key: string) => {
        setActiveItem(key);
        changeTab();
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