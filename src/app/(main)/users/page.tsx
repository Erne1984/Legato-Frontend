"use client"

import ProfileSidebar from "@/components/sections/ProfileSidebar/ProfileSidebar";
import ProfileBanner from "@/components/sections/ProfileBanner/ProfileBanner";
import ProfileTabs from "@/components/sections/ProfileTabs/ProfileTabs";
import SuggestedProfiles from "@/components/sections/SuggestedProfiles/SuggestedProfiles";
import BioCard from "@/components/sections/BioCard/BioCard";
import StatsCardUser from "@/components/sections/StatsCardUser/StatsCardUser";
import Post from "@/components/ui/Post/Post";
import styles from "./users.module.css";

import posts from "./data.json";  
import {  useSearchParams } from "next/navigation";

export default function Users() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  const linkBanner =
    "https://i.pinimg.com/736x/d1/79/be/d179be883aae4362fe022465d3fee356.jpg";
  const userImg =
    "https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480";

  return (
    <div className={styles.users_container_wrapper}>
      <div className={styles.users_container}>
        <ProfileBanner imgUrl={linkBanner} />

        <div className={styles.main_content}>
          <div className={styles.left_content}>
            <ProfileSidebar
              displayName="Marcelo"
              username="Marcel123"
              userImg={userImg}
            />
            <StatsCardUser connections={4} followers={10} posts={3} />
          </div>

          {/* Conteúdo central */}
          <div className={styles.center_content}>
            {/* Tabs com troca manual */}
            <ProfileTabs />

            {tab === "overview" && <BioCard />}

            {tab === "activity" &&
              posts.map((post, index) => (
                <Post
                  key={index}
                  author={post.author}
                  timestamp={post.timestamp}
                  location={post.location}
                  content={post.content}
                  likes={post.likes}
                  comments={post.comments}
                />
              ))}

          
          </div>

          {/* Lateral direita */}
          <SuggestedProfiles userImg={linkBanner} />
        </div>
      </div>
    </div>
  );
}
