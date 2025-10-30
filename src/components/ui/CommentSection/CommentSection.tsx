"use client";

import { useState } from "react";
import styles from "./CommentSection.module.css";
import Comment from "./Comment";
 

type CommentType = {
  id?: number;
  avatarUrl: string;
  username: string;
  timeAgo: string;
  content: string;
  likes: number;
};

type CommentSectionProps = {
  comments: CommentType[];
  //onAddComment: (text: string) => void;
};

export default function CommentSection({ comments }: CommentSectionProps) {
  const [input, setInput] = useState("");

  return (
    <section className={styles.comment_section}>
      <h3 className={styles.title}>Comentários</h3>

      <form className={styles.comment_form}>
        <textarea
          placeholder="Escreva um comentário..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.textarea}
        />
 
        <button type="submit" className={styles.submit_button}>
          Enviar
        </button>
      </form>

      <div className={styles.comment_list}>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </section>
  );
}
