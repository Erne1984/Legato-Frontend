"use client";

import styles from "./SearchContent.module.css";
import UsersSectionResult from "@/components/sections/search/UsersSectionResult/UsersSectionResult";
import ProfileAlbumBox from "../../users/ProfileAlbumBox/ProfileAlbumBox";
import MenuMobileSearch from "../MenuMobile/MenuMobileSearch";
import SidebarSearch from "../SidebarSearch/SidebarSearch";
import ColaborationsSection from "../ColaborationsSection/ColaborationsSection";
import Footer from "@/components/ui/Footer/Footer";

export default function SearchContent() {
  return (
    <div className={styles.container_search_wrapper}>
      <div className={styles.container_search_content}>
        <SidebarSearch tab="Tudo" />

        <div className={styles.center_content}>
          <MenuMobileSearch tab="Tudo" />

          <UsersSectionResult />

          <ColaborationsSection />

          <ProfileAlbumBox showSeeAll={true} />
        </div>
      </div>

      <Footer/>
    </div>
  );
}
