import ColaborationCard from "@/components/ui/ColaborationCard/ColaborationCard";
import styles from "./ColaborationsList.module.css";

export interface Colaboration {
  id: number;
  title: string;
  author: string;
  description: string
  royalties: string;
  genres: string;
  remote: boolean;
  deadline: string;
  timeAgo: string;
  imageUrl: string;
}

interface Props {
  colaborations: Colaboration[];
  onCardClick: (id: number) => void;
}

export default function ColaborationsList({
  colaborations,
  onCardClick,
}: Props) {
  if (!colaborations.length) {
    return <p className={styles.empty}>Nenhuma colaboração encontrada.</p>;
  }

  return (
    <div className={styles.cards_list}>
      {colaborations.map((colab) => (
        <ColaborationCard
          key={colab.id}
          onClick={() => onCardClick(colab.id)}
          imageUrl={colab.imageUrl}
          title={colab.title}
          author={colab.author}
          royalties={colab.royalties}
          genres={colab.genres}
          remote={colab.remote}
          deadline={colab.deadline}
          timeAgo={colab.timeAgo}
        />
      ))}
    </div>
  );
}
