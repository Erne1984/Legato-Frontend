"use client";
import Image from "next/image";
import styles from "./CreatePost.module.css";
import Icon from "@/components/ui/Icon/Icon";
import { useState } from "react";
import ModalCreatePost from "../ModalCreatePost/ModalCreatePost";

type CreatePostProps = {
  imgUrl: string;
  username: string;
  onClick?: () => void;
};

export default function CreatePost({
  imgUrl,
  username,
  onClick,
}: CreatePostProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.container_create_post_wrapper}>
      <div className={styles.create_post_box} onClick={onClick}>
        <Image
          src={imgUrl}
          alt={username}
          width={40}
          height={40}
          className={styles.profile_image}
        />

        <div className={styles.fake_input}>O que há de novo?</div>

        <button
          className={styles.image_button}
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name="image" />
        </button>
      </div>

      {isModalOpen && (
        <ModalCreatePost
          imgUrl="https://example.com/avatar.jpg"
          username="ErnePlayson"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
