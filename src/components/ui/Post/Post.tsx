import styles from "./Post.module.css";
import { authorPost } from "@/types/authorPost";
import { contentPost } from "@/types/contentPost";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";

export interface PostProps {
  author: authorPost;
  timestamp: string;
  location?: string;
  content: contentPost;
  likes: number;
  commentsLikes: number;
}

export default function Post({
  author,
  timestamp,
  location,
  content,
  likes,
  commentsLikes,
}: PostProps) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen((prev) => !prev);
  }

  return (
    <article className={styles.post}>
      <PostHeader author={author} timestamp={timestamp} location={location} />
      <PostContent content={content} />

      <PostFooter
        likes={likes}
        commentsLikes={commentsLikes}
        modalShow={modalOpen}
        onOpenModal={() => handleModal()}
      />

      <PostModal
        isOpen={modalOpen}
        onClose={() => handleModal()}
        post={{ author, timestamp, location, content, likes, commentsLikes }}
      />
    </article>
  );
}
