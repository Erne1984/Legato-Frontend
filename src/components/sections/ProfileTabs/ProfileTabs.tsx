import styles from "./ProfileTabs.module.css";


export default function ProfileTabs() {

    return(
        <nav className={styles.container_profile_tabs}>

            <ul>
                <li className={styles.selected_item}>Visão Geral</li>
                <li>Atividade</li>
                <li>Portfólio</li>
                <li>Colaborações</li>
            </ul>

        </nav>
    )
}