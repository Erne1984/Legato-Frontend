"use client";

import styles from "./SettingsContent.module.css";
import { useState } from "react";
import { useUpdateUser, useUploadUserCardImage } from "@/hooks/useUser";
import { Instrument } from "@/types/skills";
import { Genre } from "@/types/genres";
import { User } from "@/types/response";
import SidebarSettings from "../SidebarSettings/SidebarSettings";
import MenuMobileSettings from "../MenuMobileSettings/MenuMobileSettings";
import CardSettingsTab from "./CardSettingsTab";
import GeneralSettingsTab from "./GeneralSettingsTab";

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
                <GeneralSettingsTab
                    profileBanner={me.profileBanner}
                    profilePicture={me.profilePicture}
                    displayName={formData.displayName}
                    username={formData.username}
                    bio={formData.bio}
                    instruments={formData.instruments}
                    genres={formData.genres}
                    links={formData.links}
                    onBasicInfoChange={handleBasicInfoChange}
                    onMusicChange={handleMusicInterestsChange}
                    onLinksChange={handleLinksChange}
                    onSave={handleSave}
                    isSaving={isPending}
                />
            }

            {
                tab == "Card" &&
                <CardSettingsTab
                    cardImages={cardImages}
                    onUploadImage={handleUploadCardImage}
                    cardSlides={cardSlides}
                    userId={me.id}
                    displayName={me.displayName}
                    username={me.username}
                    bio={me.bio}
                    instruments={me.instruments || []}
                    genres={me.genres || []}
                    profilePicture={me.profilePicture}
                />
            }
        </div>
    )
}