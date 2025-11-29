"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import ProfileSidebar from "@/components/sections/users/ProfileSidebar/ProfileSidebar";
import ProfileBanner from "@/components/sections/users/ProfileBanner/ProfileBanner";
import ProfileTabs from "@/components/sections/users/ProfileTabs/ProfileTabs";
import SuggestedProfiles from "@/components/ui/SuggestedProfiles/SuggestedProfiles";
import StatsCardUser from "@/components/sections/users/StatsCardUser/StatsCardUser";
import Post from "@/components/ui/Post/Post";

import styles from "./UsersContent.module.css";
import posts from "./data.json";

import ProfileAlbumBox from "../ProfileAlbumBox/ProfileAlbumBox";
import TrackBox from "../../../ui/TrackBox/TrackBox";
import { Track } from "@/types/Track";
import MusicPlayer from "@/components/ui/MusicPlayer/MusicPlayer";
import ColaborationCard from "../../../ui/ColaborationCard/ColaborationCard";
import ShortVideoCard from "../ShortVideoCard/ShortVideoCard";

import GeneralView from "@/components/sections/users/GeneralView/GeneralView";
import CreatePost from "../../feed/CreatePost/CreatePost";
import ModalCreatePost from "../../feed/ModalCreatePost/ModalCreatePost";

import { useMe, useFindByUsername } from "@/hooks/useUser";
import Login from "@/app/(landing)/login/page";

export default function UsersContent() {
  const searchParams = useSearchParams();
  const { username } = useParams();

  const tab = searchParams.get("tab") || "overview";

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: meData } = useMe();
  const me = meData?.data;

  const { data: profileData, isLoading: profileLoading } =
    useFindByUsername(username as string);

  const profile = profileData?.data;

  if (!me) return <Login />;
  if (profileLoading) return <div>Carregando...</div>;
  if (!profile) return <div>Usuário não encontrado.</div>;

  const isOwner = me.username === profile.username;

  return (
    <div className={styles.users_container_wrapper}>
      <div className={styles.users_container}>
        <ProfileBanner imgUrl={profile.profileBanner} />

        <div className={styles.main_content}>
          <div className={styles.left_content}>
            <ProfileSidebar
              displayName={profile.displayName}
              username={profile.username}
              userImg={profile.profilePicture}
              isOwner={isOwner}
            />
            <StatsCardUser
              connections={profile.connectionIds.length}
              followers={profile.followerIds.length}
              posts={profile.postsIds.length}
            />
          </div>

          <div className={styles.center_content}>
            <ProfileTabs />

            {tab === "overview" && <GeneralView bio={profile.bio} goal={profile.goal} genres={profile.genres} skills={profile.instruments} />}

            {tab === "activity" && (
              <div>
                {isOwner && (
                  <CreatePost
                    imgUrl={me.profilePicture}
                    username={me.username}
                    onClick={() => setIsModalOpen(true)}
                  />
                )}

                {posts.map((post, index) => (
                  <Post
                    key={index}
                    postId={post.id}
                    author={post.author}
                    timestamp={post.timestamp}
                    location={post.location}
                    content={post.content}
                    likes={post.likes}
                    commentsLikes={post.commentsLikes}
                  />
                ))}
              </div>
            )}

            {tab === "musics" && (
              <>
                <TrackBox
                  showSeeAll={true}
                  onSelectTrack={(track) => {
                    setCurrentTrack(track);
                    setPlayerVisible(true);
                  }}
                />
                <ProfileAlbumBox showSeeAll={true} />
              </>
            )}

            { /*tab === "videos" && (
              <div className={styles.videosGrid}>
                {profile.videos?.map((videoUrl: string, idx: number) => (
                  <ShortVideoCard key={idx} videoUrl={videoUrl} />
                ))}
              </div>

            ) */}

            {/* tab === "collaborations" && (
              <ColaborationCard
                imageUrl={profile.profilePicture}
                title="Looking for a producer to make 1 R&B track"
                author={profile.username}
                royalties="% of royalties, % of publishing"
                genres="R&B / Soul, House"
                remote={true}
                deadline="Needed within 25 days"
                timeAgo="2 days ago"
              />
            ) */}

            <MusicPlayer
              currentTrack={currentTrack}
              visible={playerVisible}
              onClose={() => setPlayerVisible(false)}
            />
          </div>

          <SuggestedProfiles currentUserId={me.id} currentProfileId={profile.id} />
        </div>
      </div>

      {isModalOpen && (
        <ModalCreatePost
          imgUrl={me.profilePicture}
          username={me.username}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
