"use client";

import { Suspense } from "react";
import UsersContent from "@/components/sections/UsersContent/UsersContent";

export default function UsersPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <UsersContent />
    </Suspense>
  );
}
