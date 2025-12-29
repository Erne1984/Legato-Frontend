import { useState } from "react";
import { Camera } from "lucide-react";
 
import styles from "./CardImageUpload.module.css";
import { CardImageModal } from "../CardImageModal/CardImageModal";

interface Props {
    images: (string | null)[];
    onUpload: (file: File, index: number) => void;
    onRemove?: (index: number) => void;
}

export function CardImageGrid({ images, onUpload, onRemove }: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.slot}
                        onClick={() => setActiveIndex(index)}
                    >
                        {image ? (
                            <img src={image} alt={`Card ${index + 1}`} />
                        ) : (
                            <div className={styles.placeholder}>
                                <Camera size={28} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {activeIndex !== null && (
                <CardImageModal
                    image={images[activeIndex]}
                    onClose={() => setActiveIndex(null)}
                    onUpload={(file) => {
                        onUpload(file, activeIndex);
                        setActiveIndex(null);
                    }}
                    onRemove={
                        images[activeIndex]
                            ? () => {
                                onRemove?.(activeIndex);
                                setActiveIndex(null);
                            }
                            : undefined
                    }
                />
            )}
        </>
    );
}
