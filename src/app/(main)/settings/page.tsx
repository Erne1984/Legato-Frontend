"use client";
import ProfileBannerUploader from "@/components/sections/settings/ProfileBannerUploader/ProfileBannerUploader";
import styles from "./settings.module.css";
import BasicInfoForm from "@/components/sections/settings/BasicInfoForm/BasicInfoForm";
import MusicInterestsForm from "@/components/sections/settings/MusicInterestsForm/MusicInterestsForm";
import LinksSection from "@/components/sections/settings/LinksSection/LinksSection";
import ActionButtons from "@/components/sections/settings/ActionButtons/ActionButtons";
import { useMe } from "@/hooks/useUser";
import Login from "@/app/(landing)/login/page";

export default function SettingsPage() {
  const { data: meData } = useMe();
  const me = meData?.data;

  if (!me) return <Login />;
  const links = me.links || {};

  return (
    <div className={styles.container_settings_wrapper}>

      <ProfileBannerUploader bannerPhoto={me.profileBanner} profilePhoto={me.profilePicture} />
      <BasicInfoForm displayName={me.displayName} username={me.username} bio={me.bio} />
      <MusicInterestsForm
        initialInstruments={me.instruments}
        initialGenres={me.genres}
      />
      <LinksSection
        instagramLink={links.instagram}
        spotifyLink={links.spotify}
        youtubeLink={links.youtube}
        soundcloudLink={links.soundcloud}
        websiteLink={links.website}
      />
      <ActionButtons />
    </div>
  );
}
