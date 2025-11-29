import Image from "next/image";
import styles from "./ProfileSidebar.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import ProfileOptionsMenu from "../ProfileOptionsMenu/ProfileOptionsMenu";
import { useState } from "react";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { Camera } from "lucide-react";

type ProfileSidebarProps = {
  userImg?: string | null;
  username: string;
  displayName: string;
  isOwner: boolean;
};

export default function ProfileSidebar({
  userImg,
  username,
  displayName,
  isOwner,
}: ProfileSidebarProps) {
  const [follow, setFollow] = useState<boolean>(true);

  const handleFollow = () => {
    setFollow((prev) => !prev);
  };

  const hasImage = Boolean(userImg);

  return (
    <aside className={styles.container}>
      <div className={styles.avatar}>
        {hasImage ? (
          <Image
            src={userImg!}
            alt={displayName}
            width={85}
            height={85}
            className={styles.avatarImg}
          />
        ) : (
          <div className={styles.placeholderAvatar}>
            <Camera size={28} strokeWidth={1.4} />
          </div>
        )}
      </div>

      {!isOwner && (
        <div className={styles.icon_user_options}>
          <ProfileOptionsMenu />
        </div>
      )}

      <h2 className={styles.displayName}>{displayName}</h2>
      <p className={styles.username}>@{username}</p>

      {!isOwner && (
        <>
          {follow ? (
            <PrimaryButton
              content="Conectado"
              size="medium"
              onClick={handleFollow}
            />
          ) : (
            <SecondaryButton content="Conectar" onClick={handleFollow} />
          )}
        </>
      )}
    </aside>
  );
}
