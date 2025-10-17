import Image from "next/image";
import styles from "./ProfileBanner.module.css";

type ProfileBannerProps = {
  imgUrl: string;
  alt?: string;
  className?: string;
};

export default function ProfileBanner({ 
  imgUrl, 
  alt = "Profile banner",
  className = "" 
}: ProfileBannerProps) {

  return (
    <div className={`${styles.bannerContainer} ${className}`}>
      <Image
        src={imgUrl}
        alt={alt}
        fill
        className={styles.bannerImage}
        priority
      />
    </div>
  );
}