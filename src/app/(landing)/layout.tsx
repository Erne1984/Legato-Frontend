"use client";
import HeaderLandingPage from "@/components/sections/landingPage/HeaderLandingPage/HeaderLandingPage";
import HeaderMobileLandingPage from "@/components/ui/HeaderMobile/HeaderMobileLandingPage";
import WarningModal from "@/components/ui/WarningModal/WarningModal";
import { useMe } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading } = useMe();
  
  const router = useRouter();

  const user = data?.data;

  useEffect(() => {
    if (!isLoading && user) {
      router.replace(`/users/${user.username}`);
    }
  }, [isLoading, data, router]);


  return (
    <>
      <HeaderLandingPage />

      <HeaderMobileLandingPage />
      {children}
    </>
  );
}
