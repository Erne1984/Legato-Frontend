"use client";
import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon/Icon";
import ImageModal from "./ImageModal";
import styles from "./ProfileBannerUploader.module.css";

type ProfileBannerUploaderProps = {
  profilePhoto?: string;
  bannerPhoto?: string;
};

export default function ProfileBannerUploader({
  profilePhoto,
  bannerPhoto,
}: ProfileBannerUploaderProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showBannerModal, setShowBannerModal] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Foto de Perfil e Banner</h2>

      <div className={styles.controls}>
        {/* FOTO DE PERFIL */}
        <div className={styles.profileSection}>
          {profilePhoto ? (
            <Image
              src={profilePhoto}
              alt="Foto de perfil"
              width={64}
              height={64}
              className={styles.profileImage}
              onClick={() => setShowProfileModal(true)}
            />
          ) : (
            <button
              className={styles.profileButton}
              onClick={() => setShowProfileModal(true)}
            >
              <Icon name="camera" />
            </button>
          )}
        </div>

        {/* BANNER */}
        <div className={styles.bannerSection}>
          {bannerPhoto ? (
            <Image
              src={bannerPhoto}
              alt="Banner do perfil"
              width={400}
              height={120}
              className={styles.bannerImage}
              onClick={() => setShowBannerModal(true)}
            />
          ) : (
            <button
              className={styles.bannerButton}
              onClick={() => setShowBannerModal(true)}
            >
              Adicionar Banner
            </button>
          )}
        </div>
      </div>

      {showProfileModal && (
        <ImageModal
          title="Alterar foto de perfil"
          type="profile"
          onClose={() => setShowProfileModal(false)}
        />
      )}

      {showBannerModal && (
        <ImageModal
          title="Alterar banner"
          type="banner"
          onClose={() => setShowBannerModal(false)}
        />
      )}
    </div>
  );
}
