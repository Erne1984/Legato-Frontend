import ProfileSidebar from "@/components/sections/ProfileSidebar/ProfileSidebar";
import ProfileBanner from "../../components/sections/ProfileBanner/ProfileBanner";
import styles from "./users.module.css";

export default function Users() {
  const linkBanner =
    "https://i.pinimg.com/736x/d1/79/be/d179be883aae4362fe022465d3fee356.jpg";
  const userImg =
    "https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480";

  return (
    <div className={styles.users_container_wrapper}>
      <div className={styles.users_container}>
        <ProfileBanner imgUrl={linkBanner} />

        <ProfileSidebar
          displayName="Marcelo"
          username="Marcel123"
          userImg={userImg}
        />
      </div>
    </div>
  );
}
