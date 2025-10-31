import Image from "next/image";
import { contentPost } from "@/types/contentPost";
import styles from "./Post.module.css";
import { getYouTubeEmbedUrl } from "@/utils/getYouTubeEmbedUrl ";

type PostContentProps = {
  content: contentPost;
  onClick?: () => void;
};

export default function PostContent({ content, onClick }: PostContentProps) {
  return (
    <div className={styles.content} onClick={onClick}>
      {content.text && <p className={styles.text}>{content.text}</p>}

      {content.imageUrl && (
        <div className={styles.imageWrapper}>
          <Image
            src={content.imageUrl}
            alt="Post image"
            width={800}
            height={450}
            className={styles.image}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}

      {content.videoUrl &&
        (content.videoUrl.includes("youtube.com") ||
        content.videoUrl.includes("youtu.be") ? (
          <iframe
            width="100%"
            height="450"
            src={getYouTubeEmbedUrl(content.videoUrl)}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        ) : (
          <video controls className={styles.video}>
            <source src={content.videoUrl} type="video/mp4" />
          </video>
        ))}

      {content.audioUrl && (
        <audio controls className={styles.audio}>
          <source src={content.audioUrl} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
