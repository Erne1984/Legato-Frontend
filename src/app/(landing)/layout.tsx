

import HeaderLandingPage from "@/components/sections/HeaderLandingPage/HeaderLandingPage";
import HeaderMobileLandingPage from "@/components/ui/HeaderMobile/HeaderMobileLandingPage";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderLandingPage  />

      <HeaderMobileLandingPage />
      {children}
    </>
  );
}
