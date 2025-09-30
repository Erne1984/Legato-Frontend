import Image from "next/image";
import styles from "./SuggestedProfiles.module.css";


type SuggestedProfilesProps = {
    userImg: string
}


export default function SuggestedProfiles({userImg}: SuggestedProfilesProps) {

    return(
        <aside className={styles.suggested_profiles_container}>
            <h3>Perfils semelhantes</h3>

            <div className={styles.user_suggested_row}>

                <Image width={40} height={40} src={userImg} alt="User Photo" />

                <div className={styles.user_info}>

                    <p>Fulano</p>

                    <p>@fulano123</p>

                </div>

            </div>
        </aside>
    )
}