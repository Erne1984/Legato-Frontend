import ProfileAlbumBox from "@/components/sections/users/ProfileAlbumBox/ProfileAlbumBox";
import styles from "./albums.module.css";

export default function AlbumsPage() {
  return (
    <div className={styles.albums_page}>
      <div className={styles.albums_page_wrapper}>
        <ProfileAlbumBox showSeeAll={false} />
      </div>
    </div>
  );
}
