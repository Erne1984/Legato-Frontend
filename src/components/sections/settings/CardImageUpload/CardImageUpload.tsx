import styles from "./CardImageUpload.module.css";

interface CardImageUploadProps {
    image: string | null;
    onUpload: (file: File) => void;
    isLoading?: boolean;
    disabled?: boolean;
}

export function CardImageUpload({
    image,
    onUpload,
    isLoading = false,
    disabled = false,
}: CardImageUploadProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onUpload(file);
    };

    return (
        <div className={styles.cardSlot}>
            <label className={styles.uploadWrapper}>
                {image ? (
                    <img
                        src={image}
                        alt="Card"
                        className={styles.cardImage}
                    />
                ) : (
                    <span className={styles.placeholder}>+</span>
                )}

                {!disabled && (
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        disabled={isLoading}
                        onChange={handleFileChange}
                    />
                )}

                {isLoading && (
                    <div className={styles.overlay}>
                        <span className={styles.spinner} />
                    </div>
                )}
            </label>
        </div>
    );
}
