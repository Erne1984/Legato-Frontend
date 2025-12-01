"use client";

import Icon from "@/components/ui/Icon/Icon";
import styles from "./MenuMobileSettings.module.css";
import { useState } from "react";
import { MenuItem, SidebarProps } from "../../feed/Sidebar/Sidebar";


export default function MenuMobileSettings({ tab }: SidebarProps) {
    const [activeItem, setActiveItem] = useState(tab);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems: MenuItem[] = [
        { key: "Geral", icon: "settings", label: "Tudo" },
        { key: "Card", icon: "users", label: "Card" }
    ];

    const handleItemClick = (key: string) => {
        setActiveItem(key);
        setIsMobileMenuOpen(false);
    };

    const activeItemLabel =
        menuItems.find((item) => item.key === activeItem)?.label || "Configurações";

    return (
        <div className={styles.mobile_menu}>
            <button
                className={styles.mobile_menu_button}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span>{activeItemLabel}</span>
                <Icon name={isMobileMenuOpen ? "arrowUp" : "arrowDown"} size={20} />
            </button>

            {isMobileMenuOpen && (
                <div className={styles.mobile_menu_dropdown}>
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleItemClick(item.key)}
                            className={`${styles.mobile_menu_item} ${activeItem === item.key ? styles.selected_item : ""
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
