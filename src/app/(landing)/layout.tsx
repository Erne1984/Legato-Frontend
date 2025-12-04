"use client";
import HeaderLandingPage from "@/components/sections/landingPage/HeaderLandingPage/HeaderLandingPage";
import HeaderMobileLandingPage from "@/components/ui/HeaderMobile/HeaderMobileLandingPage";
import { useMe } from "@/hooks/useUser";
import { isTokenValid } from "@/utils/isTokenValid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  const isLogged = isTokenValid();

  useEffect(() => {
    if (isLogged) {
      router.replace("/find_musicians");
    }
    setAuthChecked(true);
  }, [isLogged, router]);

  return (
    <>
      <HeaderLandingPage />

      <HeaderMobileLandingPage />
      {children}
    </>
  );
}
