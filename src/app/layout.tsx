import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";
import Providers from "../components/layout/providers";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Last Trumpet Church",
  description:
    "We're a community that is deeply moved by God's fame and deeds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable}${poppins.variable} antialiased`}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}̦
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
