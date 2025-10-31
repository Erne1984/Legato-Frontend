"use client";

import Sidebar from "@/components/sections/feed/Sidebar/Sidebar";
import styles from "./FeedPage.module.css";
import CreatePost from "@/components/sections/feed/CreatePost/CreatePost";
import SuggestedProfiles from "@/components/ui/SuggestedProfiles/SuggestedProfiles";
import Post from "@/components/ui/Post/Post";
import posts from "../../../components/sections/users/UsersContent/data.json";
import Footer from "@/components/ui/Footer/Footer";
import { useState } from "react";
import ModalCreatePost from "@/components/sections/feed/ModalCreatePost/ModalCreatePost";

export default function FeedPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.container_feed_wrapper}>
      <div className={styles.container_main_content}>
        <Sidebar tab="Em Destaque" />

        <div className={styles.center_content}>
          <CreatePost
            imgUrl={
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdkHhjzlsAqhkYuCH0Ly2ClT2jM_EZGqfqP179vw1jo5TCFdjZiL5Q3iYiUhj6L3XokuhpdaTY-mJY4ehQ08JR_LB4G_yjZYllBAnkEuX1"
            }
            username="ErnePlayson"
            onClick={() => setIsModalOpen(true)}
          />

          {posts.map((post, index) => (
            <Post
              key={index}
              postId={post.id}
              author={post.author}
              timestamp={post.timestamp}
              location={post.location}
              content={post.content}
              likes={post.likes}
              commentsLikes={post.commentsLikes}
            />
          ))}
        </div>

        <SuggestedProfiles userImg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdkHhjzlsAqhkYuCH0Ly2ClT2jM_EZGqfqP179vw1jo5TCFdjZiL5Q3iYiUhj6L3XokuhpdaTY-mJY4ehQ08JR_LB4G_yjZYllBAnkEuX1" />
      </div>

      <Footer />
            {isModalOpen && (
              <ModalCreatePost
                imgUrl=    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdkHhjzlsAqhkYuCH0Ly2ClT2jM_EZGqfqP179vw1jo5TCFdjZiL5Q3iYiUhj6L3XokuhpdaTY-mJY4ehQ08JR_LB4G_yjZYllBAnkEuX1"
                username="ErnePlayson"
                onClose={() => setIsModalOpen(false)}
              />
            )}
    </div>
  );
}
