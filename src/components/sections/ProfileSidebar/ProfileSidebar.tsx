import Image from "next/image";
import styles from "./ProfileSidebar.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Icon from "@/components/ui/Icon/Icon";

type ProfileSidebarProps = {
  userImg: string;
  username: string;
  displayName: string;
};

export default function ProfileSidebar({
  userImg,
  username,
  displayName,
}: ProfileSidebarProps) {
  return (
    <aside className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={userImg}
          alt={displayName}
          width={85}
          height={85}
          className={styles.avatarImg}
        />
      </div>
      <Icon name="ellipsis" className={styles.icon_user_options}/>

      <h2 className={styles.displayName}>{displayName}</h2>
      <p className={styles.username}>@{username}</p>
      <PrimaryButton content="Conectar" size="medium" />
    </aside>
  );
}
