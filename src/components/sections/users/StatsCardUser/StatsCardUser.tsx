"use client";

import { useState } from "react";
import styles from "./StatsCardUser.module.css";
import UserListModal from "@/components/ui/UserListModal/UserListModal";

import { useGetUsersConnections, useGetUsersFollowers } from "@/hooks/useUser";

type StatsCardUserProps = {
  userId: number;
  userUsername: string,
  posts: number;
};

export default function StatsCardUser({ userId, userUsername, posts }: StatsCardUserProps) {
  const [showConnections, setShowConnections] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  const { data: connData } = useGetUsersConnections();
  const { data: followersData } = useGetUsersFollowers(userId);

  const connections = connData?.data || [];
  const followers = followersData?.data || [];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.stat} onClick={() => setShowConnections(true)}>
          <span className={styles.number}>{connections.length}</span>
          <span className={styles.label}>Conexões</span>
        </div>

        <div className={styles.stat} onClick={() => setShowFollowers(true)}>
          <span className={styles.number}>{followers.length}</span>
          <span className={styles.label}>Seguidores</span>
        </div>

        <div className={styles.stat} onClick={() => setShowPosts(true)}>
          <span className={styles.number}>{posts}</span>
          <span className={styles.label}>Posts</span>
        </div>
      </div>

      <UserListModal
        username={userUsername}
        show={showConnections}
        onClose={() => setShowConnections(false)}
        type="connections"
        users={connections}
      />

      <UserListModal
        username={userUsername}
        show={showFollowers}
        onClose={() => setShowFollowers(false)}
        type="followers"
        users={followers}
      />

      <UserListModal
        username={userUsername}
        show={showPosts}
        onClose={() => setShowPosts(false)}
        type="posts"
      />
    </>
  );
}
