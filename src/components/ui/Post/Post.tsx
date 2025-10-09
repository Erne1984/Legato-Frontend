import styles from "./Post.module.css";
import { authorPost } from "@/types/authorPost";
import { contentPost } from "@/types/contentPost";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";

export interface PostProps {
  author: authorPost;
  timestamp: string;
  location?: string;
  content: contentPost;
  likes: number;
  comments: number;
}

export default function Post({
  author,
  timestamp,
  location,
  content,
  likes,
  comments,
}: PostProps) {
  return (
    <article className={styles.post}>
      <PostHeader author={author} timestamp={timestamp} location={location} />
      <PostContent content={content} />
      <PostFooter likes={likes} comments={comments} />
    </article>
  );
}
