import styles from "./SettingsContent.module.css";
import ProfileBannerUploader from "@/components/sections/settings/ProfileBannerUploader/ProfileBannerUploader";
import BasicInfoForm from "@/components/sections/settings/BasicInfoForm/BasicInfoForm";
import MusicInterestsForm from "@/components/sections/settings/MusicInterestsForm/MusicInterestsForm";
import LinksSection from "@/components/sections/settings/LinksSection/LinksSection";
import ActionButtons from "@/components/sections/settings/ActionButtons/ActionButtons";
import { Instrument } from "@/types/skills";
import { Genre } from "@/types/genres";

type GeneralSettingsTabProps = {
  profileBanner?: string;
  profilePicture?: string;

  displayName: string;
  username: string;
  bio: string;

  instruments: Instrument[];
  genres: Genre[];

  links: {
    instagram: string;
    spotify: string;
    youtube: string;
    soundcloud: string;
    website: string;
  };

  onBasicInfoChange: (data: {
    username: string;
    displayName: string;
    bio: string;
  }) => void;

  onMusicChange: (data: {
    instruments: Instrument[];
    genres: Genre[];
  }) => void;

  onLinksChange: (links: {
    instagram: string;
    spotify: string;
    youtube: string;
    soundcloud: string;
    website: string;
  }) => void;

  onSave: () => void;
  isSaving: boolean;
};

export default function GeneralSettingsTab({
  profileBanner,
  profilePicture,
  displayName,
  username,
  bio,
  instruments,
  genres,
  links,
  onBasicInfoChange,
  onMusicChange,
  onLinksChange,
  onSave,
  isSaving,
}: GeneralSettingsTabProps) {
  return (
    <div className={styles.container_settings_center}>
      <ProfileBannerUploader
        bannerPhoto={profileBanner}
        profilePhoto={profilePicture}
      />

      <BasicInfoForm
        displayName={displayName}
        username={username}
        bio={bio}
        onChange={onBasicInfoChange}
      />

      <MusicInterestsForm
        initialInstruments={instruments}
        initialGenres={genres}
        onChange={onMusicChange}
      />

      <LinksSection
        instagramLink={links.instagram}
        spotifyLink={links.spotify}
        youtubeLink={links.youtube}
        soundcloudLink={links.soundcloud}
        websiteLink={links.website}
        onChange={onLinksChange}
      />

      <ActionButtons onSave={onSave} disabled={isSaving} />
    </div>
  );
}
