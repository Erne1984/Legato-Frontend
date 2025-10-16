import ProfileBannerUploader from "@/components/sections/settings/ProfileBannerUploader/ProfileBannerUploader";
import styles from "./settings.module.css";
import BasicInfoForm from "@/components/sections/settings/BasicInfoForm/BasicInfoForm";
import MusicInterestsForm from "@/components/sections/settings/MusicInterestsForm/MusicInterestsForm";
import LinksSection from "@/components/sections/settings/LinksSection/LinksSection";
import ActionButtons from "@/components/sections/settings/ActionButtons/ActionButtons";

export default function SettingsPage() {
  return (
    <div className={styles.container_settings_wrapper}>

      <ProfileBannerUploader />
      <BasicInfoForm />
      <MusicInterestsForm />
      <LinksSection />
      <ActionButtons />
    </div>
  );
}
