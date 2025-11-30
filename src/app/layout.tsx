"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { useState, useEffect, useCallback, useRef } from "react";
import WarningModal from "@/components/ui/WarningModal/WarningModal";
import api from "@/libs/axios";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loadingCount, setLoadingCount] = useState(0); // contador unificado
  const pathname = usePathname(); // App Router: detecta rota atual
  const firstRender = useRef(true); // para ignorar o primeiro render

  const incrementLoading = useCallback(() => setLoadingCount((c) => c + 1), []);
  const decrementLoading = useCallback(() => setLoadingCount((c) => Math.max(c - 1, 0)), []);

  // Interceptores do Axios
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      incrementLoading();
      return config;
    });

    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        decrementLoading();
        return response;
      },
      (error) => {
        decrementLoading();
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [incrementLoading, decrementLoading]);

  // Navegação interna: detecta mudanças de pathname
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // ignora o primeiro render
    }

    // Incrementa o loading apenas em navegação interna
    incrementLoading();

    // Fecha o loading após a navegação
    const timeout = setTimeout(() => {
      decrementLoading();
    }, 100); // ajuste o delay se quiser animação mais suave

    return () => clearTimeout(timeout);
  }, [pathname, incrementLoading, decrementLoading]);

  const loading = loadingCount > 0;

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <ReactQueryProvider>{children}</ReactQueryProvider>

          {/* Modal de Loading */}
          <WarningModal show={loading} message="Carregando..." showCloseButton={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}

