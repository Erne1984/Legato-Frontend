"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/sections/feed/Sidebar/Sidebar";
import SuggestedProfiles from "@/components/ui/SuggestedProfiles/SuggestedProfiles";
import Footer from "@/components/ui/Footer/Footer";
import PostBody from "@/components/ui/Post/PostBody";
import CommentSection from "@/components/ui/CommentSection/CommentSection";
import posts from "@/components/sections/users/UsersContent/data.json";
import styles from "./PostPage.module.css";
import PostFooter from "@/components/ui/Post/PostFooter";

export default function PostPage() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id.toString() === postId);

  const [comments] = useState([
    {
      avatarUrl:
        "https://images.thebrag.com/cdn-cgi/image/fit=crop,width=900,height=600/https://images-r2.thebrag.com/rs/uploads/2020/07/3-john-entwistle.jpg?w=940",
      username: "PETE PETE",
      timeAgo: "há 2 horas",
      content: "Esse post é sensacional! Concordo totalmente.",
      likes: 10,
    },
    {
      avatarUrl:
        "https://cdn.britannica.com/93/248593-050-AF9040CC/Pete-Townshend-1971-The-Who.jpg?w=300",
      username: "David",
      timeAgo: "há 1 hora",
      content: "Interessante o ponto de vista, mas tenho minhas dúvidas.",
      likes: 8,
    },
  ]);

  if (!post) {
    return (
      <div className={styles.not_found}>
        <p>Post não encontrado.</p>
      </div>
    );
  }

  return (
    <div className={styles.container_post_wrapper}>
      <div className={styles.container_main_content}>
        <Sidebar tab="" />

        <div className={styles.center_content}>
          <div className={styles.post_container}>
            <PostBody
              author={post.author}
              timestamp={post.timestamp}
              location={post.location}
              content={post.content}
            />
            <PostFooter commentsLikes={post.commentsLikes}  likes={post.commentsLikes} />
          </div>

          <CommentSection comments={comments} />
        </div>

{/*         <SuggestedProfiles
          userImg="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdkHhjzlsAqhkYuCH0Ly2ClT2jM_EZGqfqP179vw1jo5TCFdjZiL5Q3iYiUhj6L3XokuhpdaTY-mJY4ehQ08JR_LB4G_yjZYllBAnkEuX1"
        />*/}

      </div>

      <Footer />
    </div>
  );
}
