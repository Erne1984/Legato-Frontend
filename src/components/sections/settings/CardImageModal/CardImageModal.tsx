import Icon from "@/components/ui/Icon/Icon";
import styles from "./CardImageModal.module.css";

interface Props {
    image: string | null;
    onClose: () => void;
    onUpload: (file: File) => void;
    onRemove?: () => void;
}

export function CardImageModal({
    image,
    onClose,
    onUpload,
    onRemove,
}: Props) {
    if (!open) return null;

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onUpload(file);
    };

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.preview}>
                    {image ? (
                        <img src={image} alt="Preview" />
                    ) : (
                        <Icon name="camera" />
                    )}
                </div>

                <div className={styles.actions}>
                    <label className={styles.button}>
                        <Icon name="upload" />
                        {image ? "Trocar imagem" : "Adicionar imagem"}
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleFile}
                        />
                    </label>

                    {image && (
                        <button
                            className={`${styles.button} ${styles.danger}`}
                            onClick={onRemove}
                        >
                            <Icon name="trash2" />

                            Remover
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
