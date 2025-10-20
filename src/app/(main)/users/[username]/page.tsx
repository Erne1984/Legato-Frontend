"use client";

import { Suspense, useEffect } from "react";
import UsersContent from "@/components/sections/users/UsersContent/UsersContent";
import { useParams } from "next/navigation";

export default function UsersPage() {
  const { username } = useParams();

  useEffect(() => {
    console.log(username);
  }, []);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <UsersContent />
    </Suspense>
  );
}
