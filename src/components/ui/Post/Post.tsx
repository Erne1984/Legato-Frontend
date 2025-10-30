import styles from "./Post.module.css";
import { authorPost } from "@/types/authorPost";
import { contentPost } from "@/types/contentPost";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import { useRouter } from "next/navigation";

export interface PostProps {
  postId: number;
  author: authorPost;
  timestamp: string;
  location?: string;
  content: contentPost;
  likes: number;
  commentsLikes: number;
}

export default function Post({
  postId,
  author,
  timestamp,
  location,
  content,
  likes,
  commentsLikes,
}: PostProps) {
  const router = useRouter();

  const handlePostNavigation = () => {
    router.push(`/post/${postId}`);
  };

  return (
    <article className={styles.post} >
      <PostHeader author={author} timestamp={timestamp} location={location} />
      <PostContent onClick={handlePostNavigation} content={content} />

      <PostFooter
        postId={postId}
        likes={likes}
        commentsLikes={commentsLikes}
      />

    </article>
  );
}
