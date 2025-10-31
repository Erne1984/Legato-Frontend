import Image from "next/image";
import styles from "./ColaborationCard.module.css";
import Icon from "@/components/ui/Icon/Icon";

interface ColaborationCardProps {
  imageUrl: string;
  title: string;
  author: string;
  royalties: string;
  genres: string;
  remote: boolean;
  deadline: string;
  timeAgo: string;
  onClick?: () => void;
}

export default function ColaborationCard({
  imageUrl,
  title,
  author,
  royalties,
  genres,
  remote,
  deadline,
  timeAgo,
  onClick
}: ColaborationCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <Icon name="music" size={18} />
            <span>{genres}</span>
          </div>

          <div className={styles.detailItem}>
            <Icon name="users" size={18} />
            <span>{royalties}</span>
          </div>

          {remote && (
            <div className={styles.detailItem}>
              <Icon name="mapPin" size={18} />
              <span>Remote position</span>
            </div>
          )}

          <div className={styles.detailItem}>
            <Icon name="clock" size={18} />
            <span>{deadline}</span>
          </div>
        </div>

        <p className={styles.timeAgo}>{timeAgo}</p>
      </div>
    </div>
  );
}
