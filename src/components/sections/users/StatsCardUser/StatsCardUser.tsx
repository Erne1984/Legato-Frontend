"use client";

import { useState } from "react";
import styles from "./StatsCardUser.module.css";
import UserListModal from "@/components/ui/UserListModal/UserListModal";

const mockUsers = [
  {
    id: 1,
    name: "666_cherry_666",
    username: "@666_cherry_666",
    followers: 12,
    following: 0,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/500px-Epikouros_BM_1843.jpg",
  },
  {
    id: 2,
    name: "666nowornever",
    username: "@666nowornever",
    followers: 5,
    following: 0,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/500px-Epikouros_BM_1843.jpg",
  },
];

type StatsCardUserProps = {
  connections: number;
  followers: number;
  posts: number;
};

export default function StatsCardUser({
  connections,
  followers,
  posts,
}: StatsCardUserProps) {
  const [showConnections, setShowConnections] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.stat} onClick={() => setShowConnections(true)}>
          <span className={styles.number}>{connections}</span>
          <span className={styles.label}>Conexões</span>
        </div>
        <div className={styles.stat} onClick={() => setShowFollowers(true)}>
          <span className={styles.number}>{followers}</span>
          <span className={styles.label}>Seguidores</span>
        </div>
        <div className={styles.stat} onClick={() => setShowPosts(true)}>
          <span className={styles.number}>{posts}</span>
          <span className={styles.label}>Posts</span>
        </div>
      </div>

      <UserListModal
        show={showConnections}
        onClose={() => setShowConnections(false)}
        type="connections"
        users={mockUsers}
      />

      <UserListModal
        show={showFollowers}
        onClose={() => setShowFollowers(false)}
        type="followers"
        users={mockUsers}
      />

      <UserListModal
        show={showPosts}
        onClose={() => setShowPosts(false)}
        type="posts"
      />
    </>
  );
}
