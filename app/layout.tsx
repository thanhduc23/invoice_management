import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/shared/NavBar";

import { Providers } from "@/lib/redux/store/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 Team",
  description: "Invoice management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <NavBar />
            {children}
          </Providers>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
