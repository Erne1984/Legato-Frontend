import Image from "next/image";
import styles from "./ProfileSidebar.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import ProfileOptionsMenu from "../../sections/users/ProfileOptionsMenu/ProfileOptionsMenu";
import { useState } from "react";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";

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
  const [follow, setFollow] = useState<boolean>(true);

  const handleFollow = () => {
    setFollow((prev) => !prev);
  };

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
      <div className={styles.icon_user_options}>
        <ProfileOptionsMenu />
      </div>

      <h2 className={styles.displayName}>{displayName}</h2>
      <p className={styles.username}>@{username}</p>
      {follow ? (
        <PrimaryButton
          content="Conectado"
          size="medium"
          onClick={handleFollow}
        />
      ) : (
        <SecondaryButton content="Conectar" onClick={handleFollow} />
      )}
    </aside>
  );
}
