"use client";

import ProfileBannerUploader from "@/components/sections/settings/ProfileBannerUploader/ProfileBannerUploader";
import styles from "./SettingsContent.module.css";
import BasicInfoForm from "@/components/sections/settings/BasicInfoForm/BasicInfoForm";
import MusicInterestsForm from "@/components/sections/settings/MusicInterestsForm/MusicInterestsForm";
import LinksSection from "@/components/sections/settings/LinksSection/LinksSection";
import ActionButtons from "@/components/sections/settings/ActionButtons/ActionButtons";
import { useState } from "react";
import { useUpdateUser } from "@/hooks/useUser";
import { Instrument } from "@/types/skills";
import { Genre } from "@/types/genres";
import { User } from "@/types/response";
import { useRouter } from "next/navigation";

interface Props {
    me: User;
}

export default function SettingsContent({ me }: Props) {
    const { mutate: updateUser, isPending } = useUpdateUser();

    const router = useRouter();

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
            data: {
                displayName: formData.displayName,
                username: formData.username,
                bio: formData.bio,
                instruments: formData.instruments,
                genres: formData.genres,
                links: formData.links,
            },
        });

    };

    return (
        <div className={styles.container_settings_wrapper}>
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
    );
}
