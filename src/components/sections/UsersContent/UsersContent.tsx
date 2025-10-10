"use client";

import { useState } from "react";
import ProfileSidebar from "@/components/sections/ProfileSidebar/ProfileSidebar";
import ProfileBanner from "@/components/sections/ProfileBanner/ProfileBanner";
import ProfileTabs from "@/components/sections/ProfileTabs/ProfileTabs";
import SuggestedProfiles from "@/components/sections/SuggestedProfiles/SuggestedProfiles";
import BioCard from "@/components/sections/BioCard/BioCard";
import StatsCardUser from "@/components/sections/StatsCardUser/StatsCardUser";
import Post from "@/components/ui/Post/Post";
import styles from "./UsersContent.module.css";
import posts from "./data.json";
import { useSearchParams } from "next/navigation";
import ProfileAlbumBox from "../ProfileAlbumBox/ProfileAlbumBox";
import TrackBox from "../../ui/TrackBox/TrackBox";
import { Track } from "@/types/Track";
import MusicPlayer from "@/components/ui/MusicPlayer/MusicPlayer";

export default function UsersContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);

  const handleSelectTrack = (track: Track) => {
    setCurrentTrack(track);
    setPlayerVisible(true); 
  };

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

          <div className={styles.center_content}>
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

            {tab === "musics" && (
              <>
                <TrackBox onSelectTrack={handleSelectTrack} />
                <ProfileAlbumBox />
              </>
            )}

            <MusicPlayer
              currentTrack={currentTrack}
              visible={playerVisible}
              onClose={() => setPlayerVisible(false)}
            />
          </div>

          <SuggestedProfiles userImg={linkBanner} />
        </div>
      </div>
    </div>
  );
}
