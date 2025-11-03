"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/ui/Footer/Footer";
import styles from "./colaborations_page.module.css";
import ModalCreateColaboration from "@/components/sections/colaborations/ModalCreateColaboration/ModalCreateColaboration";
import SuggestedProfiles from "@/components/ui/SuggestedProfiles/SuggestedProfiles";
import { useRouter } from "next/navigation";
import ModalFiltersColaboration, {
  FilterState,
} from "@/components/sections/colaborations/ModalFiltersColaboration/ModalFiltersColaboration";

import ColaborationsHeader from "@/components/sections/colaborations/ColaborationsHeader/ColaborationsHeader";
import ColaborationsFilters from "@/components/sections/colaborations/ColaborationsFilters/ColaborationsFilters";
import ColaborationsList, {
  Colaboration,
} from "@/components/sections/colaborations/ColaborationsList/ColaborationsList";

export default function ColaborationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState | null>(null);

  const [colaborations, setColaborations] = useState<Colaboration[]>([
    {
      id: 1,
      title: "Looking for a producer to make 1 R&B track",
      author: "Erne",
      royalties: "% of royalties, % of publishing",
      genres: "R&B / Soul, House",
      description: "Track experimental com base eletrônica e R&B",
      remote: true,
      deadline: "25",
      timeAgo: "2 days ago",
      imageUrl:
        "https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480",
    },
    {
      id: 2,
      title: "Need a rock vocalist for studio session",
      author: "Lia",
      royalties: "Sem royalties",
      genres: "Rock",
      description: "Gravação de faixas de rock melódico",
      remote: false,
      deadline: "7",
      timeAgo: "5 days ago",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tosin_Abasi.jpg/500px-Tosin_Abasi.jpg",
    },
  ]);

  const router = useRouter();

  const handleColaborationNavigation = (id: number) => {
    router.push(`/colaborations/${id}`);
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleAddColaboration = (newColab: Omit<Colaboration, "id" | "timeAgo">) => {
    const newEntry: Colaboration = {
      ...newColab,
      id: colaborations.length + 1,
      timeAgo: "just now",
    };
    setColaborations((prev) => [newEntry, ...prev]);
  };

  const filteredColaborations = useMemo(() => {
    if (!filters) return colaborations;

    return colaborations.filter((colab) => {
      const matchGenre =
        !filters.genre ||
        colab.genres.toLowerCase().includes(filters.genre.toLowerCase());

      const matchType =
        !filters.type ||
        (filters.type === "remote" && colab.remote) ||
        (filters.type === "in-person" && !colab.remote);

      const matchRoyalties =
        !filters.royalties ||
        (filters.royalties === "royalties" &&
          colab.royalties.toLowerCase().includes("royalties")) ||
        (filters.royalties === "no-royalties" &&
          !colab.royalties.toLowerCase().includes("royalties"));

      const matchDeadline =
        !filters.deadline ||
        parseInt(colab.deadline) <= parseInt(filters.deadline);

      return matchGenre && matchType && matchRoyalties && matchDeadline;
    });
  }, [filters, colaborations]);

  return (
    <div className={styles.container_colaborations_wrapper}>
      <div className={styles.container_main_content}>
        <div className={styles.center_content}>
          <ColaborationsHeader onCreate={() => setIsModalOpen(true)} />
          <ColaborationsFilters
            filters={filters}
            onOpenFilters={() => setIsFiltersModalOpen(true)}
          />
          <ColaborationsList
            colaborations={filteredColaborations}
            onCardClick={handleColaborationNavigation}
          />
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
          onCreate={handleAddColaboration}
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