import Icon from "@/components/ui/Icon/Icon";
import styles from "./MenuMobileSearch.module.css";
import { MenuItem, SidebarProps } from "../../feed/Sidebar/Sidebar";
import { useState } from "react";

export default function MenuMobileSearch({ tab }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(tab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { key: "Tudo", icon: "flame", label: "Tudo" },
    { key: "Usuários", icon: "users", label: "Usuários" },
    { key: "Colaborações", icon: "music", label: "Colaborações" },
    { key: "Albuns", icon: "disc", label: "Albuns" },
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
