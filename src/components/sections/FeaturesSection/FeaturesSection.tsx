import FeatureCard from "./FeatureCard";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    title: "Descobrir",
    content:
      "Encontre músicos próximos com base em localização, instrumentos e gêneros musicais.",
    icon: "search",
  },
  {
    title: "Conectar",
    content:
      "Dê match com músicos compatíveis e inicie conversas para colaborações.",
    icon: "heart",
  },
  {
    title: "Colaborar",
    content:
      "Forme bandas, participe de jam sessions e compartilhe sua música com a comunidade.",
    icon: "users",
  },
] as const;

export default function FeaturesSection() {
  return (
    <div className={styles.container_features}>
      <h1>Como funciona</h1>
      <p className={styles.subtitle}>Conectar músicos nunca foi tão fácil</p>

      <div className={styles.box_features_cards}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </div>
  );
}
