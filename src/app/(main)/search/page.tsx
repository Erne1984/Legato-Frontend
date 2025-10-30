"use client";
import { useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import UsersSectionResult from "@/components/sections/search/UsersSectionResult/UsersSectionResult";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  return (
    <div className={styles.container_search_wrapper}>
      <h1> {query} </h1>

      <UsersSectionResult />
    </div>
  );
}
