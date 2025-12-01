"use client";
import HeaderMobile from "@/components/ui/HeaderMobile/HeaderMobile";
import MainHeader from "@/components/ui/MainHeader/MainHeader";
import WarningModal from "@/components/ui/WarningModal/WarningModal";
import { useMe } from "@/hooks/useUser";
import { isTokenValid } from "@/utils/isTokenValid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Login from "../(landing)/login/page";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  const isLogged = isTokenValid();

  useEffect(() => {
    if (!isLogged) {
      router.replace("/login");
    }
    setAuthChecked(true);
  }, [isLogged, router]);

  if (!authChecked) return <Login/>;

  return (
    <>
      <MainHeader />
      <HeaderMobile />
      {children}
    </>
  );
}
