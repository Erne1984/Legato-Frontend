import Image from "next/image";
import styles from "./ProfileBanner.module.css";
import { Camera } from "lucide-react";

type ProfileBannerProps = {
  imgUrl?: string | null;
  alt?: string;
  className?: string;
};

export default function ProfileBanner({ 
  imgUrl, 
  alt = "Profile banner",
  className = "" 
}: ProfileBannerProps) {

  const hasImage = Boolean(imgUrl);

  return (
    <div className={`${styles.bannerContainer} ${className}`}>
      {hasImage ? (
        <Image
          src={imgUrl!}
          alt={alt}
          fill
          className={styles.bannerImage}
          priority
        />
      ) : (
        <div className={styles.placeholder}>
          <Camera size={48} strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
