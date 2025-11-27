"use client";
import HeaderMobile from "@/components/ui/HeaderMobile/HeaderMobile";
import MainHeader from "@/components/ui/MainHeader/MainHeader";
import { useMe } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isLoading } = useMe();

  const router = useRouter();

  if (isLoading)
    return <div>Carregando...</div>;

  if (!user) {
    router.push("/login");
    return null;
  }


  return (
    <>
      <MainHeader />
      <HeaderMobile />
      {children}
    </>
  );
}
