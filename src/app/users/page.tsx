import ProfileBanner from "../../components/sections/ProfileBanner/ProfileBanner";
import styles from "./users.module.css";


export default function Users() {

    const linkBanner = "https://i.pinimg.com/736x/d1/79/be/d179be883aae4362fe022465d3fee356.jpg";

    return(
        <div className={styles.users_container}>

            <ProfileBanner imgUrl={linkBanner} />

        </div>
    )
}