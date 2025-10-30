import { Suspense } from "react";
import SearchContent from "@/components/sections/search/SearchContent/SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SearchContent />
    </Suspense>
  );
}
