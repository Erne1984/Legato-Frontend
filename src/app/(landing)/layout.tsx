import HeaderLandingPage from "@/components/sections/HeaderLandingPage/HeaderLandingPage";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLandingPage />
      {children}
    </>
  );
}
