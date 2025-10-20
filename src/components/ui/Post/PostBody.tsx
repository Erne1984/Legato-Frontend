import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import { authorPost } from "@/types/authorPost";
import { contentPost } from "@/types/contentPost";

type PostBodyProps = {
  author: authorPost;
  timestamp: string;
  location?: string;
  content: contentPost;
};

export default function PostBody({ author, timestamp, location, content }: PostBodyProps) {
  return (
    <>
      <PostHeader author={author} timestamp={timestamp} location={location} />
      <PostContent content={content} />
    </>
  );
}
