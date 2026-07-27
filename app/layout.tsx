import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "J.O | Live Stage Bar",
  description:
    "Café-concert et bar à cocktails aux Arcs 1800 depuis 1993 : concerts live, tapas et ambiance clubbing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 font-body antialiased">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
