import Sidebar from "@/components/sections/feed/Sidebar/Sidebar";
import styles from "./FeedPage.module.css";
import CreatePost from "@/components/sections/feed/CreatePost/CreatePost";

export default function FeedPage() {

    return(
        <div className={styles.container_feed_wrapper}>

            <Sidebar/>

            <div>

                <CreatePost  imgUrl={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdkHhjzlsAqhkYuCH0Ly2ClT2jM_EZGqfqP179vw1jo5TCFdjZiL5Q3iYiUhj6L3XokuhpdaTY-mJY4ehQ08JR_LB4G_yjZYllBAnkEuX1"} username="ErnePlayson" />

            </div>
        </div>
    )
}