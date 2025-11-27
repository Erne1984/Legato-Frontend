"use client";
import HeaderLandingPage from "@/components/sections/landingPage/HeaderLandingPage/HeaderLandingPage";
import HeaderMobileLandingPage from "@/components/ui/HeaderMobile/HeaderMobileLandingPage";
import { useMe } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading } = useMe();
  const router = useRouter();

  if (isLoading) return null;

  if (data) {
    router.push(`/users/${data.data.username}`);
    return null;
  }

  return (
    <>
      <HeaderLandingPage />

      <HeaderMobileLandingPage />
      {children}
    </>
  );
}
