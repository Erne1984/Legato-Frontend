import HeaderMobile from "@/components/ui/HeaderMobile/HeaderMobile";
import MainHeader from "@/components/ui/MainHeader/MainHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader/>
      <HeaderMobile />
      {children}
    </>
  );
}
