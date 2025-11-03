import Icon from "@/components/ui/Icon/Icon";
import styles from "./ColaborationsFilters.module.css";
import { FilterState } from "@/components/sections/colaborations/ModalFiltersColaboration/ModalFiltersColaboration";

interface Props {
  filters: FilterState | null;
  onOpenFilters: () => void;
}

export default function ColaborationsFilters({ filters, onOpenFilters }: Props) {
  return (
    <div className={styles.filter_row}>
      <button className={styles.filter_btn} onClick={onOpenFilters}>
        <Icon name="filter" size={22} />
      </button>

      {filters && (
        <div className={styles.active_filters}>
          {Object.entries(filters)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
              <span key={key} className={styles.filter_tag}>
                {key}: {value}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}
