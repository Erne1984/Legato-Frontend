"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./postModal.module.css";
import CommentSection from "@/components/ui/CommentSection/CommentSection";
import { CommentType } from "@/types/Comment";
import { authorPost } from "@/types/authorPost";
import { contentPost } from "@/types/contentPost";
import PostBody from "../Post/PostBody";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    author: authorPost;
    timestamp: string;
    location?: string;
    content: contentPost;
    likes: number;
    commentsLikes: number;
  };
}

export default function PostModal({ isOpen, onClose, post }: PostModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [comments] = useState<CommentType[]>([
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content} ref={modalRef}>
        <PostBody
          author={post.author}
          timestamp={post.timestamp}
          location={post.location}
          content={post.content}
        />
        <CommentSection comments={comments} />
      </div>
    </div>
  );
}
