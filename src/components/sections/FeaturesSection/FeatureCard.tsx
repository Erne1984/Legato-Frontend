import Icon, { IconName } from "@/components/ui/Icon/Icon";
import styles from "./FeaturesSection.module.css";

type FeatureCardProps = {
  key: number;
  title: string;
  content: string;
  icon: IconName;
};

export default function FeatureCard(props: FeatureCardProps) {
  return (
    <div className={styles.feature_card_wrapper}>
      <div className={styles.feature_card}>
        
        <div className={styles.icon_wrapper}>
          <Icon name={props.icon} />
        </div>

        <h4>{props.title}</h4>

        <p>{props.content}</p>
      </div>
    </div>
  );
}
