import styles from "./SettingsContent.module.css";
import { CardImageGrid } from "../CardImageUpload/CardImageUpload";
import MusiciansFindCard from "../../MusiciansFindCard/ContainerMusiciansFindCard/ContainerMusiciansFindCard";
import { useDeleteUserCardPhoto } from "@/hooks/useUser";

type CardSettingsTabProps = {
    cardImages: (string | null)[];
    onUploadImage: (file: File, index: number) => void;
    cardSlides: { type: "image"; src: string }[];
    userId: number;
    displayName: string;
    username: string;
    bio?: string;
    instruments: string[];
    genres: string[];
    profilePicture?: string;
};

export default function CardSettingsTab({
    userId,
    cardImages,
    onUploadImage,
    cardSlides,
    displayName,
    username,
    bio,
    instruments,
    genres,
    profilePicture,
}: CardSettingsTabProps) {


    const { mutate: deleteUserCardPhoto } = useDeleteUserCardPhoto();

    const handleRemove = (photoIndex: number) => {
        deleteUserCardPhoto({
            userId,
            photoIndex,
        });
    };

    return (
        <div className={styles.container_settings_center}>
            <h2 className={styles.title}>Fotos card</h2>

            <CardImageGrid
                images={cardImages}
                onUpload={onUploadImage}
                onRemove={handleRemove}
            />

            <h2 className={styles.title}>Preview do Card</h2>

            <MusiciansFindCard
                name={displayName || username}
                bio={bio || "Sem biografia"}
                skills={instruments}
                musicGenres={genres}
                slides={
                    cardSlides.length > 0
                        ? cardSlides
                        : [{ type: "image", src: profilePicture || "/placeholder-image.jpg" }]
                }
                distance={0}
                gender="homem"
                age={24}
            />
        </div>
    );
}
