"use client";

import { useState } from "react";
import Sidebar from "@/components/sections/feed/Sidebar/Sidebar";
import Footer from "@/components/ui/Footer/Footer";
import ColaborationCard from "@/components/ui/ColaborationCard/ColaborationCard";
import styles from "./colaborations_page.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import ModalCreateColaboration from "@/components/sections/colaborations/ModalCreateColaboration/ModalCreateColaboration";
import SuggestedProfiles from "@/components/ui/SuggestedProfiles/SuggestedProfiles";
import Icon from "@/components/ui/Icon/Icon";
import { useRouter } from "next/navigation";
import ModalFiltersColaboration, {
  FilterState,
} from "@/components/sections/colaborations/ModalFiltersColaboration/ModalFiltersColaboration";

export default function ColaborationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState | null>(null);
  const router = useRouter();

  const handleColaborationNavigation = () => {
    router.push("/colaborations/1");
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.container_colaborations_wrapper}>
      <div className={styles.container_main_content}>
        <Sidebar />

        <div className={styles.center_content}>
          <div className={styles.header}>
            <h2>Explorar Colaborações</h2>

            <div className={styles.actions_header}>
              <PrimaryButton
                content="Nova Colab"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>

          <div className={styles.filter_row}>
            <button
              className={styles.filter_btn}
              onClick={() => setIsFiltersModalOpen(true)}
            >
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

          {/* Cards */}
          <div className={styles.cards_list}>
            <ColaborationCard
              onClick={handleColaborationNavigation}
              imageUrl="https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480"
              title="Looking for a producer to make 1 R&B track"
              author="Erne"
              royalties="% of royalties, % of publishing"
              genres="R&B / Soul, House"
              remote={true}
              deadline="Needed within 25 days"
              timeAgo="2 days ago"
            />
          </div>
        </div>

        <div className={styles.right_sidebar}>
          <SuggestedProfiles userImg="https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480" />
        </div>
      </div>

      <Footer />

      {isModalOpen && (
        <ModalCreateColaboration
          imgUrl="https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480"
          username="Erne"
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {isFiltersModalOpen && (
        <ModalFiltersColaboration
          onClose={() => setIsFiltersModalOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      )}
    </div>
  );
}
