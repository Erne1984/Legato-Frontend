"use client";

import ProfileBannerUploader from "@/components/sections/settings/ProfileBannerUploader/ProfileBannerUploader";
import styles from "./SettingsContent.module.css";
import BasicInfoForm from "@/components/sections/settings/BasicInfoForm/BasicInfoForm";
import MusicInterestsForm from "@/components/sections/settings/MusicInterestsForm/MusicInterestsForm";
import LinksSection from "@/components/sections/settings/LinksSection/LinksSection";
import ActionButtons from "@/components/sections/settings/ActionButtons/ActionButtons";
import { useState } from "react";
import { useUpdateUser, useUploadUserCardImage } from "@/hooks/useUser";
import { Instrument } from "@/types/skills";
import { Genre } from "@/types/genres";
import { User } from "@/types/response";
import SidebarSettings from "../SidebarSettings/SidebarSettings";
import MenuMobileSettings from "../MenuMobileSettings/MenuMobileSettings";
import { CardImageUpload } from "../CardImageUpload/CardImageUpload";
import MusiciansFindCard from "../../MusiciansFindCard/ContainerMusiciansFindCard/ContainerMusiciansFindCard";

interface Props {
    me: User;
}

export default function SettingsContent({ me }: Props) {
    const { mutate: updateUser, isPending } = useUpdateUser();

    const [tab, setTab] = useState<string>("Geral");

    const [formData, setFormData] = useState({
        displayName: me.displayName || "",
        username: me.username || "",
        bio: me.bio || "",
        instruments: me.instruments || [],
        genres: me.genres || [],
        links: {
            instagram: me.links?.instagram || "",
            spotify: me.links?.spotify || "",
            youtube: me.links?.youtube || "",
            soundcloud: me.links?.soundcloud || "",
            website: me.links?.website || "",
        },
    });

    const handleBasicInfoChange = (data: {
        username: string;
        displayName: string;
        bio: string;
    }) => setFormData((prev) => ({ ...prev, ...data }));

    const handleMusicInterestsChange = (data: {
        instruments: Instrument[];
        genres: Genre[];
    }) => setFormData((prev) => ({ ...prev, ...data }));

    const handleLinksChange = (links: {
        instagram: string;
        spotify: string;
        youtube: string;
        soundcloud: string;
        website: string;
    }) => setFormData((prev) => ({ ...prev, links }));

    const handleSave = () => {
        updateUser({
            displayName: formData.displayName,
            username: formData.username,
            bio: formData.bio,
            instruments: formData.instruments,
            genres: formData.genres,
            links: formData.links,
        });
    };

    const toggleTab = () => {
        if (tab == "Geral") setTab("Card")
        else setTab("Geral")
    }

    const MAX_CARD_IMAGES = 4;

    const [cardImages, setCardImages] = useState<(string | null)[]>(() => {
        const images = me.photosCard || [];
        return [...images, ...Array(MAX_CARD_IMAGES - images.length).fill(null)];
    });

    const { mutate: uploadCardImage } = useUploadUserCardImage();

    const handleUploadCardImage = (file: File, index: number) => {
        uploadCardImage(
            { index, file },
            {
                onSuccess: (res) => {
                    setCardImages(res.data.photosCard);
                }
            }
        );
    };

    const cardSlides = cardImages
        .filter((img): img is string => img !== null)
        .map(src => ({ type: "image" as const, src }));

    return (
        <div className={styles.container_settings_content}>
            <MenuMobileSettings tab={tab} />
            <SidebarSettings tab={tab} changeTab={toggleTab} />

            {
                tab == "Geral" &&
                <div className={styles.container_settings_center}>
                    <ProfileBannerUploader
                        bannerPhoto={me.profileBanner}
                        profilePhoto={me.profilePicture}
                    />

                    <BasicInfoForm
                        displayName={formData.displayName}
                        username={formData.username}
                        bio={formData.bio}
                        onChange={handleBasicInfoChange}
                    />

                    <MusicInterestsForm
                        initialInstruments={formData.instruments}
                        initialGenres={formData.genres}
                        onChange={handleMusicInterestsChange}
                    />

                    <LinksSection
                        instagramLink={formData.links.instagram}
                        spotifyLink={formData.links.spotify}
                        youtubeLink={formData.links.youtube}
                        soundcloudLink={formData.links.soundcloud}
                        websiteLink={formData.links.website}
                        onChange={handleLinksChange}
                    />

                    <ActionButtons onSave={handleSave} disabled={isPending} />
                </div>
            }

            {
                tab == "Card" &&
                <div className={styles.container_settings_center}>
                    <h2 className={styles.title}>Fotos card</h2>
                    <div className={styles.cardGrid}>
                        {cardImages.map((image, index) => (
                            <CardImageUpload
                                key={index}
                                image={image}
                                onUpload={(file) => handleUploadCardImage(file, index)}
                            />
                        ))}
                    </div>

                    <h2 className={styles.title}>Preview do Card</h2>

                    <MusiciansFindCard 
                        name={me.displayName || me.username}
                        bio={me.bio || "Sem biografia"}
                        skills={me.instruments?.map(i => i) || []}
                        slides={cardSlides.length > 0 ? cardSlides : [
                            { type: "image", src: me.profilePicture || "/placeholder-image.jpg" }
                        ]}
                        distance={0}
                        gender={"homem"}
                        musicGenres={me.genres?.map(g => g) || []}
                        age={24}
                    />
                </div>
            }
        </div>
    )
}