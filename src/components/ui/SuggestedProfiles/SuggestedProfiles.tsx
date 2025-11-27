"use client";
import Image from "next/image";
import styles from "./SuggestedProfiles.module.css";

//                <Image width={40} height={40} src={userImg} alt="User Photo" />

export default function SuggestedProfiles() {

    return(
        <aside className={styles.suggested_profiles_container}>
            <h3>Perfils para seguir</h3>

            <div className={styles.user_suggested_row}>



                <div className={styles.user_info}>

                    <p>Fulano</p>

                    <p>@fulano123</p>

                </div>

            </div>
        </aside>
    )
}