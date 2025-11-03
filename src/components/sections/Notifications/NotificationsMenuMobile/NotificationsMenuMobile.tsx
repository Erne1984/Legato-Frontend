import { useState } from "react";
import { MenuItem, SidebarProps } from "../../feed/Sidebar/Sidebar";
import styles from "./NotificationsMenuMobile.module.css";
import Icon from "@/components/ui/Icon/Icon";

export default function NotificationsMenuMobile({ tab }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(tab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { key: "Geral", icon: "flame", label: "Geral" },
    { key: "Convites", icon: "users", label: "Convites" },
    { key: "Colaborações", icon: "music", label: "Colaborações" },
  ];

  const handleItemClick = (key: string) => {
    setActiveItem(key);
  };

  const activeItemLabel =
    menuItems.find((item) => item.key === activeItem)?.label || "Em Destaque";

  return (
    <div className={styles.mobile_menu}>
      <button
        className={styles.mobile_menu_button}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span>{activeItemLabel}</span>
        {isMobileMenuOpen ? (
          <Icon name="arrowUp" size={20} />
        ) : (
          <Icon name="arrowDown" size={20} />
        )}
      </button>

      {isMobileMenuOpen && (
        <div className={styles.mobile_menu_dropdown}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleItemClick(item.key)}
              className={`${styles.mobile_menu_item} ${
                activeItem === item.key ? styles.selected_item : ""
              }`}
            >
              <Icon name={item.icon} className={styles.mobile_icon} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
