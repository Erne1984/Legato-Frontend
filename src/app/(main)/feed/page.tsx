import Sidebar from "@/components/sections/feed/Sidebar/Sidebar";
import styles from "./FeedPage.module.css";

export default function FeedPage() {

    return(
        <div className={styles.container_feed_wrapper}>

            <Sidebar/>
        </div>
    )
}