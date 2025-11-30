"use client";
import HeaderMobile from "@/components/ui/HeaderMobile/HeaderMobile";
import MainHeader from "@/components/ui/MainHeader/MainHeader";
import WarningModal from "@/components/ui/WarningModal/WarningModal";
import { useMe } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useMe();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  if (!user) return null;

  return (
    <>
      <MainHeader />
      <HeaderMobile />
      {children}
    </>
  );
}
